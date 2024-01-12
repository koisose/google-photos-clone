import { component$ } from "@builder.io/qwik";
async function whoami(){

}
export default component$(() => {
  return (
    <>
      <div class="flex flex-col items-center justify-start p-4">
        <h1 class="text-4xl font-bold mt-10">Gql hashnode</h1>
      </div>
      <div class="flex flex-col items-center mt-5">
    
         <input
    class="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex  w-full max-w-md resize rounded-md border bg-white p-2 text-sm text-gray-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
    placeholder="Put your hashnode key here"
    type="text"
  />
        <button class="ring-offset-background focus-visible:ring-ring mt-4 inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-400 dark:hover:bg-blue-300">
          Submit
        </button>
      </div>
    </>
  );
});
