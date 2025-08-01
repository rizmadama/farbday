window.onload = () => {
    
    const capy = document.getElementById('capybara');
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const nextBtn = document.getElementById('nextBtn');
    const bgMusic = document.querySelector('audio');

    // Mulai animasi capybara berjalan
    capy.classList.add('walking');

    // Coba putar musik saat halaman dimuat
    // Browser modern mungkin akan memblokir ini.
    // Jika tidak berhasil, pindahkan bgMusic.play() ke dalam onclick nextBtn
    if (bgMusic) {
        bgMusic.play().catch(e => console.log("Autoplay was prevented:", e));
    }

    // Animate capybara entering
    setTimeout(() => {
        capy.style.left = "120px";
    }, 500);

    // Stop walking animation and play sound & show letter when near envelope
    setTimeout(() => {
        // Hapus class 'walking' untuk menghentikan animasi
        capy.classList.remove('walking');

        // Tambahkan class 'open' untuk memicu animasi amplop terbuka
        envelope.classList.add('open');

        const popSound = new Audio('pop.mp3');
        popSound.play();

        // Tampilkan surat setelah amplop terbuka
        setTimeout(() => {
            letter.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
        }, 500); // Waktu ini disesuaikan dengan durasi animasi 'open-envelope'
    }, 4500);
}