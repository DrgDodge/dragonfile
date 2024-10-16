<div class="bg-cover bg-center h-screen bg-[url('https://4kwallpapers.com/images/wallpapers/lakeside-sunrise-early-morning-minimal-art-gradient-3840x2160-4587.png')]">
    <!-- Header Navigation -->
    <nav class="fixed top-3 left-0 right-0 backdrop-blur-sm bg-white/30 text-3xl text-white font-bold flex rounded-3xl ml-40 mr-40 z-50">
        <p class="p-3">Vulturul Istoriei</p>
        <ul class="flex ml-auto space-x-10 p-3">
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

    <!-- Main content container -->
    <div class="pt-28 pb-20"> <!-- Adjusted padding to account for header and footer -->
        <slot />
    </div>
</div>

<!-- Footer centered and with rounded corners -->
<footer class="fixed bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/20 text-white text-center py-2 px-6 z-50 rounded-2xl">
    <p class="text-sm font-bold">© istoria.top - Toate drepturile rezervate  Alpha V2.0</p>
</footer>

<script>

    import "/src/app.css"
</script>