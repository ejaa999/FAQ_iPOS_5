// FAQ IPOS5 — jawaban umum dan langkah sederhana
const faq = [
  [
    "First Mile",
    "Saya tidak bisa membatalkan atau mencari satu koli pada kiriman multikoli. Apa yang harus dilakukan?",
    "Pastikan nomor resi dan koli yang dipilih sudah benar. Coba cari kembali dari menu kiriman dan pilih koli yang dimaksud. Jika pilihan pembatalan atau pencarian per koli belum tersedia, catat nomor resi dan koli yang bermasalah, lalu minta bantuan admin atau supervisor.",
  ],
  [
    "Umum",
    "Saya tidak bisa login ke IPOS5. Apa yang harus saya lakukan?",
    "Periksa koneksi internet dan pastikan nama pengguna serta kata sandi sudah benar. Coba masuk kembali. Jika masih gagal, ambil tangkapan layar pesan yang muncul dan hubungi admin atau supervisor. Jangan membagikan kata sandi kepada orang lain.",
  ],
  [
    "Last Mile",
    "Saya sudah mengambil foto, tetapi proses terus berputar dan tidak bisa dikirim. Bagaimana solusinya?",
    "Pastikan koneksi internet stabil dan foto sudah berhasil diambil dengan jelas. Tunggu sebentar, lalu coba kirim kembali. Jika masih berputar, tutup dan buka kembali aplikasi. Bila tetap gagal, simpan tangkapan layar dan laporkan kepada admin atau supervisor.",
  ],
  [
    "Last Mile",
    "Notifikasi kiriman sameday tidak muncul. Apa yang harus saya lakukan?",
    "Periksa apakah notifikasi aplikasi di ponsel sudah diizinkan. Pastikan juga aplikasi tidak dibisukan. Jika notifikasi tetap tidak muncul, catat kiriman yang dimaksud dan sampaikan kepada admin atau supervisor agar dapat diperiksa.",
  ],
  [
    "Middle Mile",
    "Saya tidak bisa melakukan bagging ke kantor tujuan tertentu. Bagaimana solusinya?",
    "Periksa kembali kantor tujuan yang dipilih dan pastikan sesuai dengan tujuan kiriman. Jika kantor tujuan tidak muncul atau proses tetap gagal, jangan memilih tujuan lain secara sembarang. Catat kiriman dan kantor tujuan, lalu minta bantuan supervisor atau admin.",
  ],
  [
    "Middle Mile",
    "Saya menemukan selisih jumlah kiriman saat unbagging. Apa yang harus dilakukan?",
    "Hentikan penyelesaian proses sementara. Hitung ulang kiriman dan cocokkan dengan daftar pada sistem. Pastikan semua kiriman sudah diperiksa sebelum menekan tombol selesai/finalisasi. Jika selisih masih ada, laporkan kepada supervisor dan ikuti arahan penanganan.",
  ],
  [
    "Middle Mile",
    "Proses penyelesaian irregularity terasa rumit. Apa yang harus saya lakukan?",
    "Periksa kembali informasi kasus dan pastikan data yang diminta sudah lengkap. Jika masih bingung, jangan menutup kasus berdasarkan perkiraan. Minta arahan supervisor atau admin dan catat bagian proses yang sulit agar dapat ditindaklanjuti.",
  ],
  [
    "Middle Mile",
    "Saya tidak bisa melakukan bagging ke kantor asal sendiri. Bagaimana solusinya?",
    "Pastikan tujuan yang dipilih memang sesuai dengan kebutuhan proses. Jika kantor asal tidak tersedia sebagai pilihan, jangan mengganti tujuan secara sembarang. Catat nama atau kode kantor dan laporkan kepada supervisor atau admin.",
  ],
  [
    "Last Mile",
    "Ada beberapa kurir dengan nama mirip. Bagaimana memilih kurir yang benar?",
    "Jangan hanya mengandalkan nama. Periksa informasi kantor penempatan atau identitas lain yang tersedia, lalu pastikan kurir yang dipilih memang bertugas di lokasi yang sesuai. Jika masih ragu, konfirmasi kepada Mandor sebelum menyimpan penugasan.",
  ],
  [
    "Middle Mile",
    "Kiriman berhasil di-unbag karena label rusak, tetapi tidak bisa di-bagging ulang. Apa yang harus dilakukan?",
    "Periksa kembali status kiriman dan pastikan kiriman yang dipilih benar. Jangan mengulangi proses berkali-kali jika sistem tetap menolak. Catat nomor resi dan pesan yang muncul, kemudian minta bantuan supervisor atau admin.",
  ],
  [
    "Umum",
    "Status pelacakan terlihat berulang atau tidak sesuai. Apa yang harus saya lakukan?",
    "Periksa status terbaru dan waktu pembaruannya. Jika kiriman sudah diproses tetapi keterangannya belum berubah, tunggu sebentar lalu periksa kembali. Jika tetap sama, catat nomor resi dan laporkan kepada supervisor atau petugas layanan terkait.",
  ],
  [
    "Umum",
    "Proses sudah dinyatakan berhasil, tetapi data belum tercatat di sistem lain. Bagaimana solusinya?",
    "Jangan langsung mengulangi transaksi agar tidak terjadi pencatatan ganda. Catat nomor transaksi, waktu kejadian, dan pesan yang muncul. Sampaikan kepada admin atau tim terkait untuk pemeriksaan lebih lanjut.",
  ],
  [
    "Umum",
    "Layanan selain sameday belum bisa diproses seperti biasa. Apa yang harus dilakukan?",
    "Pastikan jenis layanan dan data kiriman sudah dipilih dengan benar. Jika layanan tetap tidak dapat diproses, catat jenis layanan dan pesan yang muncul, lalu konfirmasi kepada supervisor atau admin sebelum mencoba cara lain.",
  ],
  [
    "Umum",
    "Pilihan pembayaran yang saya butuhkan tidak tersedia. Bagaimana solusinya?",
    "Gunakan hanya metode pembayaran yang tersedia dan diizinkan pada aplikasi. Jangan memilih metode lain hanya agar transaksi bisa dilanjutkan. Jika metode yang dibutuhkan tidak muncul, konfirmasi kepada supervisor atau admin mengenai metode yang berlaku.",
  ],
  [
    "Umum",
    "Nama kantor tidak muncul pada rekap. Apa yang harus dilakukan?",
    "Periksa apakah kantor dan periode rekap yang dipilih sudah benar. Jika nama kantor tetap tidak terlihat, catat halaman rekap dan kantor yang dimaksud, lalu sampaikan kepada admin atau supervisor.",
  ],
  [
    "Middle Mile",
    "Saya perlu memastikan kantor pada rute Manifest R7. Bagaimana caranya?",
    "Periksa kembali rute dan nama kantor pada manifest sebelum melanjutkan proses. Jika nama kantor tidak terlihat atau informasinya meragukan, jangan menebak tujuan. Konfirmasikan kepada supervisor atau admin.",
  ],
  [
    "Umum",
    "Perangkat tidak bisa membuka halaman layanan atau aksesnya sangat lambat. Apa yang harus dilakukan?",
    "Periksa sinyal dan koneksi internet, lalu coba buka kembali halaman tersebut. Jika memungkinkan, pindah ke lokasi dengan sinyal lebih baik. Jika masalah berlanjut, catat waktu kejadian dan laporkan kepada admin.",
  ],
  [
    "First Mile",
    "Pencarian kode pos tidak menemukan hasil saat memakai nama wilayah dan kota. Apa solusinya?",
    "Coba masukkan kata kunci yang lebih singkat, misalnya nama wilayah saja, lalu periksa hasil yang tersedia. Pastikan ejaan sudah benar. Jika hasil yang sesuai tetap tidak muncul, catat kata kunci yang digunakan dan laporkan kepada admin.",
  ],
  [
    "Middle Mile",
    "Transaksi muncul tetapi sepertinya belum menjadi bagian dari pekerjaan saya. Apa yang harus dilakukan?",
    "Sebelum memproses, periksa apakah transaksi tersebut memang menjadi tugas atau tanggung jawab unit Anda. Jangan melanjutkan transaksi yang belum dipastikan. Konfirmasikan kepada supervisor jika status atau penugasannya tidak jelas.",
  ],
  [
    "Last Mile",
    "Saya ingin memilih paket dari daftar tanpa memindai satu per satu. Apa yang harus dilakukan?",
    "Periksa apakah pilihan paket tersedia pada tampilan aplikasi yang digunakan. Jika paket hanya dapat dipilih melalui pemindaian, gunakan cara yang tersedia sesuai prosedur. Jika kebutuhan memilih dari daftar belum didukung, sampaikan masukan kepada supervisor atau admin.",
  ],
];

const feedback = [
  [
    "Pembatalan dan pencarian per koli pada kiriman multikoli",
    "Periksa resi dan koli yang dipilih. Jika pilihan per koli belum tersedia, catat detailnya dan laporkan kepada admin.",
    "Belum terkonfirmasi",
  ],
  [
    "Tidak bisa login (3 laporan)",
    "Periksa internet dan data login. Jika masih gagal, simpan pesan error dan hubungi admin.",
    "Belum terkonfirmasi",
  ],
  [
    "Foto berputar dan gagal dikirim",
    "Periksa koneksi, coba ulang sekali, lalu buka ulang aplikasi. Jika gagal, laporkan dengan tangkapan layar.",
    "Tindak lanjut tercatat",
  ],
  [
    "Notifikasi sameday tidak muncul",
    "Periksa izin notifikasi pada ponsel. Jika tetap tidak muncul, laporkan kepada admin.",
    "Perlu verifikasi",
  ],
  [
    "Bagging ke beberapa kantor tujuan tidak tersedia",
    "Periksa tujuan. Jika pilihan tidak tersedia, jangan mengganti tujuan sembarang; konfirmasi kepada supervisor.",
    "Perlu verifikasi",
  ],
  [
    "Selisih kiriman saat unbagging",
    "Cocokkan jumlah kiriman dengan daftar dan pastikan semua sudah dipindai sebelum finalisasi. Laporkan selisih yang belum terselesaikan.",
    "Tindak lanjut tercatat",
  ],
  [
    "Proses penyelesaian irregularity terasa rumit",
    "Pastikan data kasus lengkap dan minta arahan supervisor jika langkah berikutnya tidak jelas.",
    "Belum terkonfirmasi",
  ],
  [
    "Bagging ke kantor asal sendiri tidak tersedia",
    "Pastikan tujuan benar dan laporkan jika kantor asal tidak muncul sebagai pilihan.",
    "Tindak lanjut sebagian; perlu verifikasi",
  ],
  [
    "Nama kurir mirip",
    "Cek kantor penempatan atau identitas tambahan dan konfirmasi ke Mandor sebelum memilih.",
    "Tindak lanjut tercatat",
  ],
  [
    "Bagging ulang gagal setelah unbag label rusak",
    "Periksa status kiriman, catat pesan error, dan laporkan kepada admin.",
    "Belum terkonfirmasi",
  ],
  [
    "Status pelacakan berulang",
    "Periksa status terbaru; jika tetap tidak sesuai, laporkan nomor resi kepada petugas terkait.",
    "Perlu verifikasi",
  ],
  [
    "Transaksi berhasil tetapi belum tercatat di sistem lain",
    "Hindari transaksi berulang. Catat nomor transaksi dan laporkan untuk pemeriksaan.",
    "Tindak lanjut tercatat",
  ],
  [
    "Layanan selain sameday tidak bisa diproses",
    "Pastikan jenis layanan benar dan konfirmasi kepada admin jika masih gagal.",
    "Perlu verifikasi",
  ],
  [
    "Metode pembayaran yang diperlukan tidak tersedia",
    "Gunakan metode yang tersedia dan konfirmasi kepada supervisor; jangan memilih metode pengganti sembarang.",
    "Tindak lanjut tercatat",
  ],
  [
    "Nama kantor tidak muncul pada rekap KCU",
    "Periksa filter dan periode rekap, lalu laporkan kantor yang tidak tampil.",
    "Perlu verifikasi",
  ],
  [
    "Nama kantor tidak muncul pada referensi rute Manifest R7",
    "Periksa rute sebelum melanjutkan dan konfirmasi kepada admin jika nama kantor tidak terlihat.",
    "Perlu verifikasi",
  ],
  [
    "Perangkat lambat membuka halaman layanan",
    "Periksa sinyal internet dan coba kembali dari lokasi dengan koneksi lebih baik.",
    "Tindak lanjut tercatat",
  ],
  [
    "Pencarian kode pos dengan dua kata tidak menemukan hasil",
    "Coba kata kunci lebih singkat dan periksa ejaan. Jika tetap gagal, laporkan kata kunci yang dipakai.",
    "Belum terkonfirmasi",
  ],
  [
    "Transaksi bisa diproses walau belum menjadi kandidat",
    "Pastikan transaksi memang menjadi tugas unit Anda sebelum memproses. Laporkan jika penugasan tidak jelas.",
    "Belum terkonfirmasi",
  ],
  [
    "Paket pada daftar kurir hanya dapat dipilih lewat scan",
    "Gunakan cara yang tersedia saat ini dan sampaikan kebutuhan pemilihan dari daftar kepada admin atau supervisor.",
    "Belum terkonfirmasi",
  ],
];

const list = document.querySelector("#list"),
  search = document.querySelector("#search"),
  count = document.querySelector("#count"),
  empty = document.querySelector("#empty");
let category = "Semua";
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
function rows() {
  return [
    ...faq.map(([cat, q, a]) => ({ cat, q, a, kind: "faq" })),
    ...feedback.map(([q, a, status]) => ({
      cat: "Feedback",
      q,
      a: `<p><b>Saran langkah:</b> ${esc(a)}</p><p><b>Status tindak lanjut pada catatan:</b> ${esc(status)}. Jika masalah masih terjadi, konfirmasi kepada supervisor/admin.</p>`,
      kind: "feedback",
    })),
  ];
}
function render() {
  const query = search.value.trim().toLowerCase();
  const data = rows().filter(
    (x) =>
      (category === "Semua" || x.cat === category) &&
      (!query || `${x.cat} ${x.q} ${x.a}`.toLowerCase().includes(query)),
  );
  list.innerHTML = data
    .map(
      (x) =>
        `<article class="item"><button class="question" aria-expanded="false"><span class="q">${x.kind === "feedback" ? "!" : "?"}</span><span class="qt"><span class="tag ${x.cat.toLowerCase().replace(/ /g, "-")}">${x.cat === "Feedback" ? "Kendala & Feedback" : x.cat}</span><br>${esc(x.q)}</span><span class="chev">⌄</span></button><div class="answer" hidden>${x.kind === "feedback" ? x.a : `<p>${esc(x.a)}</p>`}</div></article>`,
    )
    .join("");
  count.textContent = `${data.length} pertanyaan ditemukan`;
  empty.hidden = !!data.length;
  list.hidden = !data.length;
  document.querySelector("#toggle").textContent = "Buka semua";
}
list.addEventListener("click", (e) => {
  const b = e.target.closest(".question");
  if (!b) return;
  const item = b.closest(".item"),
    a = item.querySelector(".answer"),
    open = a.hidden;
  a.hidden = !open;
  item.classList.toggle("open", open);
  b.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("[data-cat]").forEach((b) =>
  b.addEventListener("click", () => {
    category = b.dataset.cat;
    document
      .querySelectorAll("[data-cat]")
      .forEach((x) => x.classList.toggle("active", x === b));
    render();
  }),
);
search.addEventListener("input", render);
document.querySelector("#toggle").addEventListener("click", () => {
  const items = [...list.querySelectorAll(".item")],
    open = document.querySelector("#toggle").textContent === "Buka semua";
  items.forEach((i) => {
    i.querySelector(".answer").hidden = !open;
    i.classList.toggle("open", open);
    i.querySelector("button").setAttribute("aria-expanded", String(open));
  });
  document.querySelector("#toggle").textContent = open
    ? "Tutup semua"
    : "Buka semua";
});
render();
