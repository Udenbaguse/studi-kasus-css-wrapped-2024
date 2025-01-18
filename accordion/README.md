Penjelasan di file README ini melanjutkan penjelasan di video

gw upload di github, biar temen-temen bisa membandingkan sacara langsung. kode accordion yang dibuat pake:
Bootstrap(accordion-bootstrap)
buatan sendiri(accordion-udenbaguse)
CSS Wrapped 2024(accordion-csswrapped2024)

**accordion-bootstrap**
Kebanyakan pemula yang baru belajar pasti memilih pake Bootstrap, karena kemudahannya tinggal copy-paste component dari dokumentasi resmi terus tingal edit sesuai kebutuhan.
Dalam kasus ini sebenarnya Bootstrap masih kurang efektif dalam pengkodean karena banyak kelas utilitas yang tidak terpakai ada di bootstrap.min.css dan bootstrap.min.js
Untuk index.html gw yakin ga ada masalah karna tinggal copy-paste aja dari dokumentasi.

**accordion-udenbaguse**
Gw menyadari hal itu, jadi gw buat accordion versi gw sendiri yang mana index.html mudah dipahami dengan sedikit class, style.css dan script.js yang ringkas.
Sekilas kode yang gw buat ini keren, padahal nggak.
Ini akan jadi masalah ketika mencoba mengimplementasikan kode ini ke project lain.
Untuk script.js bisa copy-paste semua(class accordion-item dan accordion-button disesuaikan dengan index.html).
            
    const accordionItems = document.querySelectorAll(".accordion-item")
    accordionItems.forEach(item => {
      const button = item.querySelector(".accordion-button")
      button.addEventListener("click", () => {
                accordionItems.forEach(otherItem => {
                  if(otherItem !== item){
                    otherItem.classList.remove("active")
                  }
                })
               item.classList.toggle("active")
                  })
                })
             
tapi ada juga baris css yang harus di copy-paste supaya kode js berjalan(nama class sesuaikan dengan project masing-masing).

      .accordion-content{
            display: none;
            }
      .accordion-item.active .active-content{
            display: block;
            }
            
**accordion-csswrapped2024**
Akhirnya masalah kode gw teratasi setelah membaca dokumentasi CSS Wrapped 2024.
Dengan menggunakan tag HTML _details_ dan _summary_, kita tidak perlu menyembunyikan konten _display:none_ dan menampilkannya _display:block_ saat tombol diklik.
Jadi jika kita membuat accordion sederhana kita tidak perlu Javascript, karena ketika tag _summary_ diklik otomatis tag _details_ memiliki atribut _open_ yang  membuat konten ditampilkan.

Kalo kita mau cuma ada 1 konten aja yang terbuka(atrbut _open_ pada tag details), kita tinggal copy-paste Javascript dari dokumentasi CSS Wrapped 2024.

            document.querySelectorAll("details[name]").forEach(($details) => {
              $details.addEventListener("toggle", (e) => {
                const name = $details.getAttribute("name");

                if (e.newState == "open") {
                  document
                    .querySelectorAll(`details[name=${name}][open]`)
                    .forEach(($openDetails) => {
                      if (!($openDetails == $details)) {
                        $openDetails.removeAttribute("open");
                      }
                    });
                }
              });
            });

Kita juga perlu menambahkan  atribut _name_ pada setiap tag _details_ di index.html dan value dari atribut _name_ dibuat sama.

    <details name="udenbaguse" open>
      <summary>Accordion Item #1</summary>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et facilis, cum sunt, eligendi accusamus cupiditate dolorem fuga quasi rem magni illo, repellat repudiandae rerum qui beatae labore esse quisquam dolor.</p>
    </details>
    <details name="udenbaguse">
      <summary>Accordion Item #2</summary>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et facilis, cum sunt, eligendi accusamus cupiditate dolorem fuga quasi rem magni illo, repellat repudiandae rerum qui beatae labore esse quisquam dolor.</p>
    </details>

  Supaya cuma ada 1 aja atribut _open_ di tag yang ada kesamaan value name, yaitu yang paling akhir diklik.
  style.css bisa dibuat bebas 
