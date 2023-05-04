<template>
    <ul class="menu p-2 rounded-box bg-base-200 ">
        <li>
            <router-link active-class="bg-primary" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-5 w-5" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="6" height="5" rx="2"></rect><rect x="4" y="13" width="6" height="7" rx="2"></rect><rect x="14" y="4" width="6" height="16" rx="2"></rect></g></svg>
                layout
            </router-link>
        </li>
        <li>
            <router-link active-class="bg-primary" to="/colors">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-5 w-5" viewBox="0 0 512 512"><path d="M419.1 337.45a3.94 3.94 0 0 0-6.1 0c-10.5 12.4-45 46.55-45 77.66c0 27 21.5 48.89 48 48.89h0c26.5 0 48-22 48-48.89c0-31.11-34.3-65.26-44.9-77.66z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M387 287.9L155.61 58.36a36 36 0 0 0-51 0l-5.15 5.15a36 36 0 0 0 0 51l52.89 52.89l57-57L56.33 263.2a28 28 0 0 0 .3 40l131.2 126a28.05 28.05 0 0 0 38.9-.1c37.8-36.6 118.3-114.5 126.7-122.9c5.8-5.8 18.2-7.1 28.7-7.1h.3a6.53 6.53 0 0 0 4.57-11.2z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path></svg>
                colors
            </router-link>
        </li>
        <li>
            <router-link active-class="bg-primary" to="/fonts">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-5 w-5"  viewBox="0 0 1024 1024"><path d="M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8zM656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z" fill="currentColor"></path></svg>
                fonts
            </router-link>
        </li>
        <li>
            <router-link active-class="bg-primary" to="/component">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-5 w-5" viewBox="0 0 32 32"><path d="M28 20h-2v2h2v6H4v-6h10v-2H4a2.002 2.002 0 0 0-2 2v6a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2v-6a2.002 2.002 0 0 0-2-2z" fill="currentColor"></path><circle cx="7" cy="25" r="1" fill="currentColor"></circle><path d="M30 8h-8v6h-6v8h8v-6h6zm-8 12h-4v-4h4zm6-6h-4v-4h4z" fill="currentColor"></path><path d="M18 10h-8V2h8zm-6-2h4V4h-4z" fill="currentColor"></path></svg>
                component
            </router-link>
            <ul class="bg-base-200 p-2 z-10">
                <li>
                    <router-link active-class="bg-primary" to="/component/button">
                        Bouton
                    </router-link>
                </li>
                <li>
                    <router-link active-class="bg-primary" to="/component/card">
                        Carte
                    </router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>