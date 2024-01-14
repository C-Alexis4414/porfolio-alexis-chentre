<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="16.089" cy="35.245" rx="15.2336" ry="2.4747" fill="url(#paint0_radial_3_24)" fill-opacity="0.5"/>
                <g filter="url(#filter0_i_3_24)">
                  <circle cx="16.089" cy="19.817" r="15.2336" fill="url(#paint1_radial_3_24)"/>
                </g>
                <path d="M20.7097 25H17.9897V20.24H9.14972V25H6.42972V10.72C6.42972 10.0627 6.65639 9.50733 7.10972 9.054C7.58572 8.578 8.15239 8.34 8.80972 8.34H20.7097V25ZM17.9897 17.86V10.72H9.14972V19.9L11.1897 17.86H17.9897Z" fill="#004F34"/>
                <mask id="path-4-outside-1_3_24" maskUnits="userSpaceOnUse" x="9.73156" y="10.553" width="20.3724" height="22.4937" fill="black">
                  <rect fill="white" x="9.73156" y="10.553" width="20.3724" height="22.4937"/>
                  <path d="M24.9571 29.486C24.7869 30.121 24.4104 30.6067 23.8274 30.9433C23.2722 31.2639 22.6771 31.3391 22.0422 31.169L12.8465 28.705C12.2116 28.5349 11.7229 28.1693 11.3805 27.6082C11.0658 27.0311 10.9935 26.425 11.1636 25.7901L14.2436 14.2956C14.4137 13.6607 14.7764 13.1829 15.3316 12.8624C15.9146 12.5258 16.5235 12.4425 17.1585 12.6127L26.3541 15.0766C26.989 15.2468 27.4638 15.6204 27.7785 16.1975C28.121 16.7586 28.2071 17.3566 28.037 17.9915L27.421 20.2904L24.7937 19.5864L25.4097 17.2875L16.8709 14.9996L13.791 26.4941L22.3297 28.7821L22.9457 26.4832L25.573 27.1871L24.9571 29.486Z"/>
                </mask>
                <path d="M24.9571 29.486C24.7869 30.121 24.4104 30.6067 23.8274 30.9433C23.2722 31.2639 22.6771 31.3391 22.0422 31.169L12.8465 28.705C12.2116 28.5349 11.7229 28.1693 11.3805 27.6082C11.0658 27.0311 10.9935 26.425 11.1636 25.7901L14.2436 14.2956C14.4137 13.6607 14.7764 13.1829 15.3316 12.8624C15.9146 12.5258 16.5235 12.4425 17.1585 12.6127L26.3541 15.0766C26.989 15.2468 27.4638 15.6204 27.7785 16.1975C28.121 16.7586 28.2071 17.3566 28.037 17.9915L27.421 20.2904L24.7937 19.5864L25.4097 17.2875L16.8709 14.9996L13.791 26.4941L22.3297 28.7821L22.9457 26.4832L25.573 27.1871L24.9571 29.486Z" fill="#004F34"/>
                <path d="M23.8274 30.9433L24.0774 31.3763L24.0774 31.3763L23.8274 30.9433ZM11.3805 27.6082L10.9415 27.8475L10.9473 27.8583L10.9537 27.8687L11.3805 27.6082ZM15.3316 12.8624L15.5816 13.2954L15.5816 13.2954L15.3316 12.8624ZM27.7785 16.1975L27.3395 16.4369L27.3454 16.4476L27.3517 16.458L27.7785 16.1975ZM27.421 20.2904L27.2916 20.7734L27.7746 20.9028L27.904 20.4198L27.421 20.2904ZM24.7937 19.5864L24.3107 19.457L24.1813 19.94L24.6643 20.0694L24.7937 19.5864ZM25.4097 17.2875L25.8926 17.4169L26.0221 16.934L25.5391 16.8046L25.4097 17.2875ZM16.8709 14.9996L17.0003 14.5166L16.5173 14.3872L16.3879 14.8702L16.8709 14.9996ZM13.791 26.4941L13.308 26.3647L13.1786 26.8476L13.6615 26.9771L13.791 26.4941ZM22.3297 28.7821L22.2003 29.265L22.6833 29.3944L22.8127 28.9115L22.3297 28.7821ZM22.9457 26.4832L23.0751 26.0002L22.5922 25.8708L22.4628 26.3537L22.9457 26.4832ZM25.573 27.1871L26.056 27.3165L26.1854 26.8336L25.7025 26.7042L25.573 27.1871ZM24.4741 29.3566C24.3392 29.8601 24.0486 30.2382 23.5774 30.5103L24.0774 31.3763C24.7721 30.9752 25.2346 30.3819 25.44 29.6155L24.4741 29.3566ZM23.5774 30.5103C23.1402 30.7627 22.682 30.8228 22.1716 30.686L21.9128 31.6519C22.6721 31.8554 23.4041 31.765 24.0774 31.3763L23.5774 30.5103ZM22.1716 30.686L12.976 28.222L12.7171 29.188L21.9128 31.6519L22.1716 30.686ZM12.976 28.222C12.465 28.0851 12.0828 27.7992 11.8073 27.3477L10.9537 27.8687C11.363 28.5393 11.9582 28.9846 12.7171 29.188L12.976 28.222ZM11.8194 27.3688C11.5662 26.9044 11.5097 26.4304 11.6466 25.9195L10.6807 25.6607C10.4773 26.4196 10.5653 27.1577 10.9415 27.8475L11.8194 27.3688ZM11.6466 25.9195L14.7265 14.425L13.7606 14.1662L10.6807 25.6607L11.6466 25.9195ZM14.7265 14.425C14.8633 13.9145 15.1444 13.5478 15.5816 13.2954L15.0816 12.4293C14.4083 12.8181 13.9641 13.4068 13.7606 14.1662L14.7265 14.425ZM15.5816 13.2954C16.0528 13.0233 16.5256 12.9607 17.0291 13.0956L17.2879 12.1297C16.5214 11.9243 15.7763 12.0282 15.0816 12.4293L15.5816 13.2954ZM17.0291 13.0956L26.2247 15.5596L26.4835 14.5937L17.2879 12.1297L17.0291 13.0956ZM26.2247 15.5596C26.7274 15.6943 27.0904 15.9799 27.3395 16.4369L28.2175 15.9581C27.8373 15.2609 27.2506 14.7992 26.4835 14.5937L26.2247 15.5596ZM27.3517 16.458C27.6229 16.9023 27.6888 17.3594 27.554 17.8621L28.52 18.1209C28.7255 17.3538 28.619 16.6149 28.2053 15.937L27.3517 16.458ZM27.554 17.8621L26.938 20.161L27.904 20.4198L28.52 18.1209L27.554 17.8621ZM27.5504 19.8075L24.9231 19.1035L24.6643 20.0694L27.2916 20.7734L27.5504 19.8075ZM25.2767 19.7159L25.8926 17.4169L24.9267 17.1581L24.3107 19.457L25.2767 19.7159ZM25.5391 16.8046L17.0003 14.5166L16.7415 15.4825L25.2803 17.7705L25.5391 16.8046ZM16.3879 14.8702L13.308 26.3647L14.2739 26.6235L17.3539 15.129L16.3879 14.8702ZM13.6615 26.9771L22.2003 29.265L22.4591 28.2991L13.9204 26.0111L13.6615 26.9771ZM22.8127 28.9115L23.4287 26.6126L22.4628 26.3537L21.8468 28.6526L22.8127 28.9115ZM22.8163 26.9661L25.4436 27.6701L25.7025 26.7042L23.0751 26.0002L22.8163 26.9661ZM25.0901 27.0577L24.4741 29.3566L25.44 29.6155L26.056 27.3165L25.0901 27.0577Z" fill="#00DC82" mask="url(#path-4-outside-1_3_24)"/>
                <defs>
                  <filter id="filter0_i_3_24" x="0.855453" y="4.58344" width="30.4672" height="34.4672" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_24"/>
                  </filter>
                  <radialGradient id="paint0_radial_3_24" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.089 35.245) rotate(90) scale(2.4747 15.2336)">
                    <stop/>
                    <stop offset="1" stop-opacity="0"/>
                  </radialGradient>
                  <radialGradient id="paint1_radial_3_24" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.1025 11.2481) rotate(-44.0608) scale(3.42274 3.63792)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="#00DC82"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const route = useRoute();

  const navigation = [
    { name: 'Dashboard', href: '/', current: route.name == 'index' },
    { name: 'Blog', href: '/blog', current: route.name.includes('blog') },
    { name: 'Projects', href: '/projects', current: route.name == 'projects' },
    { name: 'Uses', href: '/uses', current: route.name == 'uses' },
  ]
  </script>