<script>
  import { onDestroy } from "svelte";
  import { useCurrentRoute } from "svelte-easyroute";

  const unsubscribe = useCurrentRoute(currentRoute => {
    console.log("useCurrentRoute", currentRoute);
  });

  onDestroy(unsubscribe);
</script>

<h1>Page One is here!</h1>