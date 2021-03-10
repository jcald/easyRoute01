<script>
  import { EasyrouteProvider, RouterOutlet, RouterLink } from "svelte-easyroute";
  import Button from "./Button.svelte";

  export let router = null;
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<EasyrouteProvider {router}>
  <main>
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
    <Button />
    <div style="margin-top: 2rem;">
      <RouterLink to='/'>
        <button type="button">
          Page One
        </button>
      </RouterLink>

      <RouterLink to='/page-two'>
        <button type="button">
          Page two
        </button>
      </RouterLink>
    </div>

    <RouterOutlet /> 
  </main>
</EasyrouteProvider>