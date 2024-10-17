
    <div class="bg-cover bg-center h-screen bg-[url('https://4kwallpapers.com/images/wallpapers/lakeside-sunrise-early-morning-minimal-art-gradient-3840x2160-4587.png')]">
    <a href="/"><img src="/images/Logo.png" alt="vulture" class="w-1/8 h-auto ml-5"></a>
    <nav class="absolute top-10 left-1/2 transform -translate-x-1/2 backdrop-blur-sm bg-white/30 text-2xl text-white font-bold flex rounded-3xl z-50 p-3">
        <ul class="flex space-x-10">
            <!-- Lectii with a larger hitbox -->
            <li class="relative group">
                <!-- Invisible hitbox area -->
                <div class="absolute left-0 top-full w-full h-10 group-hover:block"></div>

                <!-- Lectii dropdown button -->
                <a href="/classes" class="hover:text-blue-800 flex items-center z-10 relative">
                    Lectii
                    <!-- Dropdown arrow icon -->
                    <svg class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </a>
                <ul class="absolute hidden group-hover:block bg-white/30 backdrop-blur-sm text-white rounded-2xl shadow-lg mt-4 -ml-2.5 space-y-2 p-4 min-w-max z-50">
                    <li><a href="/lesson1" class="hover:text-blue-800">Lesson 1</a></li>
                    <li><a href="/lesson2" class="hover:text-blue-800">Lesson 2</a></li>
                    <li><a href="/lesson3" class="hover:text-blue-800">Lesson 3</a></li>
                </ul>
            </li>

            <li>
                <a href="/about" class="hover:text-blue-800">Despre Noi</a>
            </li>
            <li>
                <a href="/contact" class="hover:text-blue-800">Contact</a>
            </li>
        </ul>
    </nav>

    <div class="pt-28 pb-20">
        <slot />
    </div>
</div>

<footer class="fixed bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/20 text-white text-center py-2 px-6 z-50 rounded-2xl">
    <p class="text-sm font-bold">© istoria.top - Toate drepturile rezervate  Alpha V2.0</p>
</footer>

<script>
    import "/src/app.css";
</script>
