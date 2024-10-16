<div class="bg-cover bg-center h-screen bg-[url('https://4kwallpapers.com/images/wallpapers/lakeside-sunrise-early-morning-minimal-art-gradient-3840x2160-4587.png')]">
    <img src="/images/Logo.png" alt="vulture" class="w-1/8 h-auto ml-5">
    <nav class="absolute top-10 left-1/2 transform -translate-x-1/2 backdrop-blur-sm bg-white/30 text-2xl text-white font-bold flex rounded-3xl z-50 p-3">
        <ul class="flex space-x-10">
            <li>
                <a href="/" class="hover:opacity-70">Acasa</a>
            </li>
            <li>
                <a href="/about" class="hover:opacity-70">Despre Noi</a>
            </li>
            <li>
                <a href="/contact" class="hover:opacity-70">Contact</a>
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
    import "/src/app.css"
</script>
