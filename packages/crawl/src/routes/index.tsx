import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
  <div>
  <header class="flex justify-between items-center bg-gray-300 p-4">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      <span class="sr-only">Company Logo</span>
    </div>
    <div class="flex gap-2">
      <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
        Upload
      </button>
      <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
        Log In
      </button>
    </div>
  </header>
  <div class="p-4">
    <input
      class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full mb-4"
      placeholder="Search..."
    />
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm mb-4" data-v0-t="card">
      <div class="p-6 flex flex-col items-center justify-center gap-2">
        <h2 class="text-lg font-bold">Featured</h2>
        <p class="text-center">Check out our featured content!</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
        <img
          src=""
          alt="Card 1"
          class="w-full h-48 object-cover"
          width="200"
          height="200"
          style="aspect-ratio: 200 / 200; object-fit: cover;"
        />
        <div class="p-6 flex flex-col items-center justify-center gap-2">
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
            Details
          </button>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
            Download
          </button>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
        <img
          src=""
          alt="Card 2"
          class="w-full h-48 object-cover"
          width="200"
          height="200"
          style="aspect-ratio: 200 / 200; object-fit: cover;"
        />
        <div class="p-6 flex flex-col items-center justify-center gap-2">
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
            Details
          </button>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
            Download
          </button>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
        <img
          src=""
          alt="Card 3"
          class="w-full h-48 object-cover"
          width="200"
          height="200"
          style="aspect-ratio: 200 / 200; object-fit: cover;"
        />
        <div class="p-6 flex flex-col items-center justify-center gap-2">
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
            Details
          </button>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
            Download
          </button>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
        <img
          src=""
          alt="Card 4"
          class="w-full h-48 object-cover"
          width="200"
          height="200"
          style="aspect-ratio: 200 / 200; object-fit: cover;"
        />
        <div class="p-6 flex flex-col items-center justify-center gap-2">
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
            Details
          </button>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
            Download
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        ​
      </span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Detailed View
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  This is a detailed view of the selected item. You can add more information here as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
});
