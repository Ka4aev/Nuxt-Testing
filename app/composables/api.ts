import type { NuxtApp, AsyncDataOptions, AsyncData } from "#app";

export type useQueryOptions<DataT> = AsyncDataOptions<DataT> & {
  transform?: (data: DataT) => DataT;
  onSuccess?: EventHandler<DataT>;
  onError?: EventHandler<any>;
  onFinally?: EventHandler<undefined>;
};

export function useQuery<DataT, ErrorT = Error>(
  key: string | Ref<string> | ComputedRef<string>,
  handler: (nuxtApp?: NuxtApp) => Promise<DataT>,
  options: useQueryOptions<DataT> = {},
) {
  const successHook = createEventHook<DataT>();
  const errorHook = createEventHook<ErrorT>();
  const finallyHook = createEventHook<undefined>();

  if (options.onSuccess) successHook.on(options.onSuccess);
  if (options.onError) errorHook.on(options.onError);
  if (options.onFinally) finallyHook.on(options.onFinally);

  const asyncData = useLazyAsyncData<DataT, ErrorT>(
    key,
    async () => {
      try {
        const data = await handler();
        if (!options.transform) successHook.trigger(data as DataT);
        return data;
      } catch (e) {
        errorHook.trigger(e as ErrorT);
        throw e;
      } finally {
        finallyHook.trigger(undefined);
      }
    },
    {
      getCachedData(key, nuxtApp, { cause }) {
        if (cause === "refresh:manual") return;
        return nuxtApp.payload?.data?.[key] ?? nuxtApp.static?.data?.[key];
      },
      ...options,
      transform(data) {
        if (options.transform) {
          const transformed = options.transform(data);
          successHook.trigger(transformed as DataT);
          return transformed as DataT;
        }
        return data;
      },
    },
  );

  return {
    ...asyncData,
    isLoading: computed(() => asyncData.status.value === "pending"),
    onSuccess: successHook.on,
    onError: errorHook.on,
    onFinally: finallyHook.on,
  } as AsyncData<DataT, ErrorT> & {
    isLoading: ComputedRef<boolean>;
    onSuccess: typeof successHook.on;
    onError: typeof errorHook.on;
    onFinally: typeof finallyHook.on;
  };
}
