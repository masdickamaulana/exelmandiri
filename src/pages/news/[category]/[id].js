import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; // Import context

export default function NewsDetailPage() {
  const router = useRouter();
  const { category, id } = router.query;
  const { language } = useLanguage(); // Ambil bahasa dari context

  if (!category || !id) {
    return <div>Loading...</div>;
  }

  // Data Berita Lengkap
  const data = {
    company: [
      {
        id: 1,
        title: {
          id: "PT Exel Mandiri Inovasi Juara Nasional Olimpiade Kemenaker RI",
          en: "PT Exel Mandiri Inovasi Wins National Award at Kemenaker RI Olympiad"
        },
        shortDescription: {
          id: "Prestasi membanggakan diraih PT Exel Mandiri Inovasi sebagai Teladan 2 Nasional Olimpiade Pengupahan Berbasis Produktivitas Kemenaker RI.",
          en: "An outstanding achievement by PT Exel Mandiri Inovasi as the National 2nd Role Model at Kemenaker RI's Productivity-Based Wage Olympiad."
        },
        date: "2025-03-12",
        image: "/images/information/news1.jpg",
        content: [
          {
            type: "text",
            value: {
              id: "PT Exel Mandiri Inovasi menunjukkan kelasnya dalam Olimpiade Pengupahan Berbasis Produktivitas (OPBP) yang digelar Kementerian Ke­tenagakerjaan (Kemenaker RI). Perusahaan yang berlokasi di Lawang, Kabupaten Malang ini meraih Teladan 2 Tingkat Nasional untuk Kategori Menengah.",
              en: "PT Exel Mandiri Inovasi showcased its excellence in the Productivity-Based Wage Olympiad (OPBP) organized by the Ministry of Manpower (Kemenaker RI). The company, based in Lawang, Malang Regency, won 2nd National Role Model for the Medium Category."
            }
          },
          {
            type: "image",
            value: "/images/information/a.jpeg",
            caption: {
              id: "General Manajer PT Exel Mandiri Inovasi Dara Sundiasih (kanan) saat menerima tropy penghargaan OPBP dari Kemenaker RI.",
              en: "General Manager of PT Exel Mandiri Inovasi, Dara Sundiasih (right), receiving the OPBP award trophy from Kemenaker RI."
            }
          },
          {
            type: "text",
            value: {
              id: "Perusahaan yang bergerak di bidang jasa/kontraktor mechanical engineering meliputi pekerjaan instalasi, manufaktur, dan fabrikasi ini berhasil menyisihkan 112 perusahaan dari seluruh Indonesia. ”Prestasi ini hasil kerja keras segenap karyawan yang terus konsisten dan menunjukkan komitmen menjaga kualitas kinerja,” ujar General Manager Exel Mandiri Dara Sundiasih.",
              en: "The company, engaged in mechanical engineering services/contracting including installation, manufacturing, and fabrication, managed to surpass 112 companies from all over Indonesia. 'This achievement is the result of the hard work of all employees who consistently show commitment to maintaining quality performance,' said Exel Mandiri's General Manager, Dara Sundiasih."
            }
          },
          {
            type: "text",
            value: {
              id: "Berbagai tahapan harus dilewati Exel Mandiri -sebutan PT Exel Mandiri Inovasi- sebelum meraih penghargaan dari Kemenaker tersebut. Awalnya Exel Mandiri malah tak punya target muluk dalam keikutsertaan di ajang OPBP. ”Kami ikut dengan harapan dapat mempelajari hal baru yang bisa menguji sejauh mana perusahaan dalam melaksanakan regulasi pemerintah dalam hal pengupahan karyawan,” terang Dara.",
              en: "Various stages had to be passed by Exel Mandiri -as PT Exel Mandiri Inovasi is known- before winning the award from Kemenaker. Initially, Exel Mandiri did not set high expectations in joining OPBP. 'We participated with the hope of learning new things that could test how well the company implements government regulations on employee wages,' explained Dara."
            }
          },
          {
            type: "text",
            value: {
              id: "Adalah Dinas Ketenaga Kerjaan Kabupaten Malang yang memberikan support informasi agar Exel Mandiri ikut ambil bagian dalam Olimpiade yang digelar Kemenaker RI. Setelah melakukan input dokumen secara online sebagai syarat administrasi, tahapan berikutnya adalah verifikasi oleh Kemenaker. Setelah dinyatakan lolos, lalu dilanjutkan tahapan penilaian lapangan. ”Pihak kementerian turun langsung ke perusahaan untuk melakukan observasi. Setelah masuk nominasi tiga besar nasional, kami harus melakukan presentasi di depan tim juri dan Kemenaker pada 19 Desember 2022,” bebernya.",
              en: "The Malang Regency Manpower Office provided information support for Exel Mandiri to participate in the Olympiad held by Kemenaker RI. After submitting documents online as an administrative requirement, the next stage was verification by Kemenaker. Once passed, field assessment followed. 'The ministry team visited the company for observation. After being selected as one of the national top three nominees, we had to present in front of the jury and Kemenaker on December 19, 2022,' she explained."
            }
          },
          {
            type: "text",
            value: {
              id: "Olimpiade yang digelar Kemanker RI itu diakui Dara cukup sulit. Selain karena kriteria dan persyaratan yang harus dipenuhi, hal lain karena iklim usaha dalam hal ketenagakerjaan di masa pandemi masih mengalami kondisi sulit. Exel Mandiri yang berlokasi di Jalan Tawang Argo No 9 Kecamatan Lawang ini dibilang cukup sukses dalam menghadapi situasi tersebut. ”Hal ini tidak lepas dari komitmen bersama yang dibangun antara manajemen dan karyawan melalui berbagai penyesuaian-penyesuaian saat masa pandemi yang diterima kedua belah pihak,” terangnya.",
              en: "The Olympiad held by Kemenaker RI was quite challenging, Dara admitted. Besides the criteria and requirements that had to be met, the labor climate during the pandemic was still difficult. Exel Mandiri, located at Jalan Tawang Argo No 9, Lawang District, was quite successful in facing that situation. 'This was due to the shared commitment built between management and employees through various adjustments during the pandemic, accepted by both parties,' she said."
            }
          },
          {
            type: "text",
            value: {
              id: "Terlebih kultur organisasi di Exel Mandiri yang memiliki slogan Do Your Best, For Better Life memang mewajibkan karyawannya untuk tahu dan mengerti terkait aturan perusahaan sejak awal bergabung.",
              en: "Moreover, Exel Mandiri's organizational culture, with the slogan 'Do Your Best, For Better Life,' requires employees to know and understand company rules from the beginning of their employment."
            }
          }
        ]
      },
      {
        id: 2,
        title: {
          id: "PT Exel Mandiri Inovasi Memberangkatkan 14 Karyawan Umroh, Semoga Menjadi Motivasi Karyawan dan Keberkahan Kita Semua",
          en: "PT Exel Mandiri Inovasi Sends 14 Employees for Umrah, Hoping to Inspire and Bring Blessings to All"
        },
        shortDescription: {
          id: "PT Exel Mandiri Inovasi memberangkatkan 14 karyawan dan tokoh masyarakat untuk menunaikan ibadah umroh sebagai bentuk apresiasi dan motivasi.",
          en: "PT Exel Mandiri Inovasi sends 14 employees and community figures to perform Umrah as a form of appreciation and motivation."
        },
        date: "2025-03-12",
        image: "/images/information/news2.jpg",
        content: [
          {
            type: "text",
            value: {
              id: "PT. Exel Mandiri Inovasi yang berada di Kelurahan Lawang Kabupaten Malang ini, melaksanakan doa bersama untuk 12 karyawan dan dua orang dari Imam Masjid Miftahul Jannah, pada Jum’at (29/11/2024) pagi.",
              en: "PT. Exel Mandiri Inovasi, located in Lawang, Malang Regency, held a joint prayer for 12 employees and two imams from Miftahul Jannah Mosque on Friday morning (November 29, 2024)."
            }
          },
          {
            type: "image",
            value: "/images/information/news22.jpg",
            caption: {
              id: "Doa bersama PT Exel Mandiri Inovasi sebelum keberangkatan Umroh 14 orang karyawan dan tokoh masyarakat.",
              en: "Joint prayer at PT Exel Mandiri Inovasi before the departure of 14 employees and community figures for Umrah."
            }
          },
          {
            type: "text",
            value: {
              id: "“Alhamdulillah pada Jumat 29 November 2024, PT. Exel Mandiri doa bersama akan melepas karyawan 12 orang, dua orang dari Imam Masjid Miftahul Jannah, jadi jumlah 14 orang, akan kita kondisikan untuk Umroh tahun ini,” tandas H. Daya Sundara.",
              en: "‘Alhamdulillah, on Friday, November 29, 2024, PT. Exel Mandiri held a joint prayer to send off 12 employees and two imams from Miftahul Jannah Mosque, making a total of 14 people who will be prepared for Umrah this year,’ stated H. Daya Sundara."
            }
          },
          {
            type: "text",
            value: {
              id: "“Semoga ini menjadi motivasi karyawan yang lain juga menjadi keberkahan kita semua. Karena semua ini, bagi kita bukan menjadi riak popularitas, tapi ingin mensyukuri apa yang diberikan pada kami, sehingga kita merasa perlu untuk mengumrohkan karyawan supaya mereka termotivasi untuk perkembangan perusahaan ini ke depannya. Semoga ini menjadi kebaikan dan berkah semua,” ujar Direktur PT. Exel Mandiri H. Daya Sundara.",
              en: "‘Hopefully, this will motivate other employees and bring blessings to all of us. For us, this is not about gaining popularity, but about being grateful for what has been given to us, so we feel the need to send employees for Umrah to inspire them for the future development of this company. May this bring goodness and blessings to everyone,’ said PT. Exel Mandiri's Director, H. Daya Sundara."
            }
          }
        ]
      },
      {
        id: 3,
        title: {
          id: "PT. Exel Mandiri Inovasi Gelar Pengajian Akbar Sambut Tahun Baru 2024",
          en: "PT. Exel Mandiri Inovasi Holds Grand Islamic Gathering to Welcome 2024"
        },
        shortDescription: {
          id: "Pengajian akbar digelar PT Exel Mandiri Inovasi dalam rangka menyambut tahun baru 2024 sebagai sarana mempererat silaturahmi dan meningkatkan keimanan.",
          en: "PT Exel Mandiri Inovasi held a grand Islamic gathering to welcome 2024 as a means to strengthen bonds and enhance faith."
        },
        date: "2025-03-12",
        image: "/images/information/news3.jpg",
        content: [
          {
            type: "text",
            value: {
              id: "Tokoh masyarakat H. Daya Sundara sebagai Pimpinan PT. Exel Mandiri Inovasi yang beralamat di Jalan Tawangargo Lawang Kecamatan Lawang Kabupaten Malang Jawa Timur, menggelar pengajian akbar akhir tahun 2023 dengan tema “Dengan Sholawat, Kita Budayakan Cinta Rasul Pupuk Solidaritas Serta Jauhkan Dari Kemungkaran” yang dilaksanakan pada Minggu Malam (31/12/2023).",
              en: "Community leader H. Daya Sundara, as the head of PT. Exel Mandiri Inovasi located at Jalan Tawangargo, Lawang, Malang Regency, East Java, held a grand Islamic gathering at the end of 2023 with the theme 'Through Sholawat, We Cultivate Love for the Prophet, Foster Solidarity, and Avoid Immorality,' held on Sunday night (December 31, 2023)."
            }
          },
          {
            type: "image",
            value: "/images/information/news32.jpg",
            caption: {
              id: "Pengajian Akbar PT Exel Mandiri Inovasi untuk menyambut tahun baru 2024.",
              en: "Grand Islamic gathering of PT Exel Mandiri Inovasi to welcome 2024."
            }
          },
          {
            type: "text",
            value: {
              id: "H. Daya Sundara saat ditemui lenbari.com mengatakan, pengajian akbar ini menjadi momentum kebersamaan dalam memperkuat tali silaturahmi, dan untuk lebih memperkuat keimanan dan ketakwaan kepada Allah SWT juga semakin kuat keimanannya, tandas H. Daya Sundara.",
              en: "H. Daya Sundara, when interviewed by lenbari.com, said that this grand gathering was a moment of togetherness to strengthen relationships and to further enhance faith and piety to Allah SWT, he emphasized."
            }
          },
          {
            type: "text",
            value: {
              id: "“Di tahun ini kita saling berdoa karena kita akan menghadapi tahun baru 2024. Dengan harapan tahun depan ini lebih baik dari tahun sebelumnya, kita berdoa banyak orang yang merayakannya dengan suka mereka, ada yang dengan musik, kembang api, tapi kalau kita minimal kita masih punya keimanan, jadi kita lakukan orang-orang yang Muslim, orang yang bertanggung jawab, pengurus Masjid, dengan tahun baru ini kita isi dengan berdoa, dengan muhasabah, doa bersama, berikhtiar, bersholawat, kita berharap tahun 2024 lebih baik dari tahun sebelumnya,” tandas Pimpinan PT. Exel Mandiri ini.",
              en: "‘This year, we pray together as we face 2024. Hoping next year will be better than the last. Many celebrate with music and fireworks, but at least we hold on to faith. As Muslims, responsible people, mosque caretakers, we choose to fill this New Year with prayer, reflection, collective supplication, effort, and sholawat. We hope 2024 will be better than the previous year,’ emphasized the leader of PT. Exel Mandiri."
            }
          },
          {
            type: "text",
            value: {
              id: "“Kita menjelang pemilihan Presiden, Presiden yang terpilih siapapun, akan lebih baik membawa bangsa ini menjadi negara yang berkembang dan semakin maju dari sebelumnya, itu yang kita harapkan,” ujarnya.",
              en: "‘As we approach the presidential election, we hope that whoever gets elected will lead this nation to become more developed and progressive than before,’ he stated."
            }
          },
          {
            type: "image",
            value: "/images/information/news33.jpg",
            caption: {
              id: "Suasana pengajian akbar PT Exel Mandiri Inovasi menjelang tahun baru 2024.",
              en: "Atmosphere of PT Exel Mandiri Inovasi's grand gathering ahead of 2024."
            }
          },
          {
            type: "text",
            value: {
              id: "Kita berharap doa dari para ulama, kyai dan para habaib, para ustadz minimal taruhlah untuk lingkungan, semua kita ajak, daripada kembang api, takutnya nanti terjadi kebakaran, ada lagi kebut-kebutan, trek-trekan motor yang berakibat kecelakaan, dengan pengajian ini mudah-mudahan kita berharap tidak hanya fokus kemeriahan semata, kita lakukan dengan doa,” pungkas H. Daya Sundara.",
              en: "‘We hope for prayers from scholars, kyai, habaib, and ustadz, at least for our environment, inviting everyone. Instead of fireworks that may cause fires or dangerous motorcycle races, through this gathering, we hope to focus not only on festivity but also on prayers,’ concluded H. Daya Sundara."
            }
          }
        ]
      },
      {
        id: 4,
        title: {
          id: "Sambut Tahun Baru 2025, Lawang Bersholawat Didukung Oleh PT. Exel Mandiri Inovasi",
          en: "Welcoming 2025, Lawang Bersholawat Supported by PT. Exel Mandiri Inovasi"
        },
        shortDescription: {
          id: "PT Exel Mandiri Inovasi mendukung kegiatan Lawang Bersholawat untuk sambut tahun baru 2025, wujud kepedulian sosial dan spiritual kepada masyarakat.",
          en: "PT Exel Mandiri Inovasi supports Lawang Bersholawat event to welcome 2025, as a form of social and spiritual care for the community."
        },
        date: "2025-03-12",
        image: "/images/information/news4.jpg",
        content: [
          {
            type: "text",
            value: {
              id: "Detik-detik menyambut tahun baru 2025, Kelurahan Lawang Kecamatan Lawang Kabupaten Malang Jawa Timur, mengadakan pengajian umum ke-8 yang akan dilaksanakan pada Selasa (31/12/2024) malam.",
              en: "As 2025 approaches, Lawang Village, Lawang Subdistrict, Malang Regency, East Java, is holding its 8th grand Islamic gathering on Tuesday night (December 31, 2024)."
            }
          },
          {
            type: "image",
            value: "/images/information/news42.jpg",
            caption: {
              id: "Dalam koordinasi sambut tahun baru 2025, nampak terlihat Direktur PT. Exel Mandiri Inovasi H. Daya Sundara, Wadan Denpom Divif 2 Kostrad, Danramil Lawang, Lurah, dan tokoh Lawang.",
              en: "During the coordination for welcoming 2025, visible are PT. Exel Mandiri Inovasi Director H. Daya Sundara, Wadan Denpom Divif 2 Kostrad, Danramil Lawang, Village Head, and Lawang community leaders."
            }
          },
          {
            type: "text",
            value: {
              id: "Tujuan memperkuat penyelarasan kehidupan yang harmonis dengan lingkungan, mulai dari alam, budaya, serta peningkatan toleransi antarumat beragama untuk mencapai masyarakat yang adil dan makmur, adalah salah satu Astacita Presiden RI Prabowo Subianto.",
              en: "The goal of strengthening a harmonious life with nature, culture, and improving interfaith tolerance to achieve a just and prosperous society is one of the Astacita of Indonesian President Prabowo Subianto."
            }
          },
          {
            type: "text",
            value: {
              id: "“Lurah Lawang mengatakan, terima kasih kepada Abah Daya Sundara, kegiatan sambut tahun baru mengadakan pengajian akbar, dan selama ini banyak sekali bantuan untuk berbagai macam keperluan, kepedulian, dengan beberapa kegiatan ini selalu dibantu oleh Abah Daya,” tandas Lurah Lawang.",
              en: "‘The Village Head of Lawang expressed gratitude to Abah Daya Sundara, for holding a grand Islamic gathering to welcome the New Year, and for consistently providing assistance for various needs and community care,’ emphasized the Lawang Village Head."
            }
          },
          {
            type: "text",
            value: {
              id: "“Alhamdulillah, support dari Muspika Lawang, Pak Lurah, dan lainnya, intinya dengan tahun baru ini, diadakan pengajian di Masjid Roudatul Jannah, alhamdulillah ini sudah yang ke delapan kali,” ujar Abah Daya Sundara kepada lenbari.com.",
              en: "‘Alhamdulillah, with support from Muspika Lawang, the Village Head, and others, we are holding a gathering at Masjid Roudatul Jannah for the eighth time,’ said Abah Daya Sundara to lenbari.com."
            }
          },
          {
            type: "text",
            value: {
              id: "“Dengan kegiatan ini, yang sudah dimulai sejak 2016, intinya meminimalisir kegiatan tahun baru yang tidak bermanfaat, tidak dilakukan dengan hura-hura, tetapi dengan ibadah bertema 'Lawang Bersholawat'.",
              en: "‘Through this activity, which has been held since 2016, we aim to minimize unbeneficial New Year celebrations, avoiding wild festivities, and instead focusing on worship under the theme 'Lawang Bersholawat'."
            }
          },
          {
            type: "text",
            value: {
              id: "Mudah-mudahan kita ingin ibaratnya akhir tahun ini adalah kita mengkaji ulang, kegiatan tahun-tahun sebelumnya, dan kita berdoa serta berharap di tahun 2025 ini menjadi keberkahan untuk Indonesia, khususnya untuk Lawang agar semuanya mendapat berkah,” pungkas H. Daya Sundara.",
              en: "‘Hopefully, as the year ends, we reflect on previous years, pray, and hope that 2025 will bring blessings for Indonesia, especially for Lawang, so that everyone will be blessed,’ concluded H. Daya Sundara."
            }
          }
        ]
      },  
    ],
    csr: [
      {
        id: 1,
        title: {
          id: "Bantuan Kemanusiaan untuk Bencana Banjir di Pasuruan",
          en: "Humanitarian Aid for Flood Disaster in Pasuruan"
        },
        shortDescription: {
          id: "Exel Mandiri Inovasi aktif dalam program kemanusiaan untuk membantu masyarakat terdampak banjir.",
          en: "Exel Mandiri Inovasi is active in humanitarian programs to assist communities affected by floods."
        },
        date: "2025-03-12",
        image: "/images/csr/csr123.jpeg",
        content: [
          {
            type: "text",
            value: {
              id: "Banjir besar yang melanda wilayah Pasuruan beberapa waktu lalu telah menyebabkan kerusakan parah pada pemukiman warga, fasilitas umum, serta memaksa banyak warga mengungsi ke tempat aman. Sebagai bentuk kepedulian sosial, Exel Mandiri Inovasi bergerak cepat untuk memberikan bantuan langsung kepada masyarakat terdampak.",
              en: "The massive flood that hit Pasuruan recently caused severe damage to residents' homes, public facilities, and forced many to evacuate to safer areas. As a form of social care, Exel Mandiri Inovasi quickly took action to provide direct assistance to affected communities."
            }
          },
          {
            type: "image",
            value: "/images/csr/cs12.jpeg",
            caption: {
              id: "Penyaluran bantuan logistik kepada warga terdampak banjir.",
              en: "Distribution of logistical aid to residents affected by the flood."
            }
          },
          {
            type: "text",
            value: {
              id: "Tim kami menyalurkan berbagai kebutuhan pokok seperti sembako, air bersih, pakaian layak pakai, serta peralatan kebersihan. Bantuan ini diharapkan dapat membantu meringankan beban warga dalam menghadapi kondisi sulit akibat bencana ini. Selain itu, tim relawan kami turut serta membantu proses evakuasi dan membersihkan lingkungan pasca banjir.",
              en: "Our team distributed essential needs such as basic food supplies, clean water, decent clothing, and sanitation equipment. This aid is expected to ease the burden on residents facing hardships due to this disaster. In addition, our volunteer team also assisted in evacuation processes and post-flood cleanup efforts."
            }
          },
          {
            type: "text",
            value: {
              id: "Exel Mandiri Inovasi berkomitmen untuk terus hadir di tengah masyarakat dalam setiap situasi darurat, sebagai wujud tanggung jawab sosial perusahaan. Kami berharap, kolaborasi dengan masyarakat dan pemerintah daerah dapat mempercepat pemulihan kondisi Pasuruan sehingga warga bisa kembali beraktivitas seperti sedia kala.",
              en: "Exel Mandiri Inovasi is committed to always being present within the community in every emergency situation as part of its corporate social responsibility. We hope that collaboration with the community and local government will accelerate Pasuruan's recovery so that residents can return to their normal activities."
            }
          }
        ]
      },
     {
        id: 2,
        title: {
          id: "Bantuan Kemanusiaan untuk Bencana Gempa Bumi di Lombok",
          en: "Humanitarian Aid for Earthquake Disaster in Lombok"
        },
        shortDescription: {
          id: "Exel Mandiri Inovasi turut membantu korban gempa bumi di Lombok melalui program kemanusiaan.",
          en: "Exel Mandiri Inovasi assists earthquake victims in Lombok through humanitarian programs."
        },
        date: "2025-03-12",
        image: "/images/csr/csr2.jpg",
        content: [
          {
            type: "text",
            value: {
              id: "Gempa bumi berkekuatan besar yang mengguncang Lombok telah menyebabkan banyak korban jiwa, luka-luka, dan kerusakan infrastruktur. Menanggapi musibah ini, Exel Mandiri Inovasi mengambil langkah cepat dengan mengirimkan bantuan kemanusiaan kepada masyarakat terdampak.",
              en: "The powerful earthquake that struck Lombok caused many casualties, injuries, and infrastructure damage. In response to this disaster, Exel Mandiri Inovasi took swift action by sending humanitarian aid to the affected communities."
            }
          },
          {
            type: "image",
            value: "/images/csr/csr22.jpg",
            caption: {
              id: "Proses distribusi bantuan kepada masyarakat Lombok yang terdampak gempa.",
              en: "Aid distribution process to Lombok communities affected by the earthquake."
            }
          },
          {
            type: "text",
            value: {
              id: "Bantuan yang diberikan meliputi makanan siap saji, air bersih, obat-obatan, tenda darurat, serta perlengkapan bayi dan anak-anak. Selain dukungan material, kami juga mengadakan program trauma healing khusus bagi anak-anak untuk membantu mereka pulih dari dampak psikologis akibat gempa.",
              en: "The assistance provided included ready-to-eat meals, clean water, medicines, emergency tents, as well as baby and children's supplies. In addition to material support, we also held a trauma healing program specifically for children to help them recover from the psychological impact of the earthquake."
            }
          },
          {
            type: "text",
            value: {
              id: "Exel Mandiri Inovasi percaya bahwa kebersamaan dan gotong royong adalah kunci utama dalam menghadapi bencana. Melalui program ini, kami ingin menegaskan bahwa perusahaan tidak hanya fokus pada bisnis, tetapi juga memiliki tanggung jawab sosial untuk membantu sesama, terutama dalam situasi krisis.",
              en: "Exel Mandiri Inovasi believes that unity and mutual cooperation are key in facing disasters. Through this program, we want to emphasize that the company is not only focused on business but also has a social responsibility to help others, especially in times of crisis."
            }
          }
        ]
      },
      {
        id: 3,
        title: {
          id: "Dukungan untuk Para Guru di SD Srigading",
          en: "Support for Teachers at SD Srigading"
        },
        shortDescription: {
          id: "Exel Mandiri Inovasi mendukung dunia pendidikan melalui bantuan kepada para guru di SD Srigading.",
          en: "Exel Mandiri Inovasi supports education through assistance to teachers at SD Srigading."
        },
        date: "2025-03-12", 
        image: "/images/csr/csr3.jpeg",
        content: [
          {
            type: "text",
            value: {
              id: "Pendidikan adalah fondasi utama untuk menciptakan generasi masa depan yang unggul. Menyadari pentingnya peran guru dalam membentuk karakter dan kecerdasan anak bangsa, Exel Mandiri Inovasi menginisiasi program dukungan khusus bagi para guru di SD Srigading, Kabupaten Malang.",
              en: "Education is the main foundation for creating an excellent future generation. Realizing the importance of teachers' roles in shaping the character and intelligence of the nation’s children, Exel Mandiri Inovasi initiated a special support program for teachers at SD Srigading, Malang Regency."
            }
          },
          {
            type: "image",
            value: "/images/csr/csr32.jpeg",
            caption: {
              id: "Penyerahan bantuan kepada guru-guru SD Srigading.",
              en: "Handing over assistance to SD Srigading teachers."
            }
          },
          {
            type: "text",
            value: {
              id: "Dalam program ini, kami memberikan bantuan berupa peralatan mengajar, perlengkapan sekolah, hingga insentif khusus untuk para guru honorer yang telah berdedikasi tanpa kenal lelah. Kami percaya, guru yang sejahtera akan lebih termotivasi dalam mendidik dan mencetak generasi penerus bangsa.",
              en: "In this program, we provided teaching equipment, school supplies, and special incentives for honorary teachers who have tirelessly dedicated themselves. We believe that well-supported teachers will be more motivated to educate and shape the nation's next generation."
            }
          },
          {
            type: "text",
            value: {
              id: "Selain bantuan fisik, kami juga mengadakan pelatihan pengembangan diri dan manajemen kelas agar para guru bisa terus meningkatkan kualitas pengajaran. Kami berharap langkah kecil ini bisa membawa dampak besar bagi peningkatan mutu pendidikan di SD Srigading dan menginspirasi perusahaan lain untuk turut berkontribusi.",
              en: "In addition to material assistance, we also held self-development and classroom management training to help teachers continue improving their teaching quality. We hope this small step can make a significant impact on improving education quality at SD Srigading and inspire other companies to contribute as well."
            }
          }
        ]
      },
    ],
  };

  // Cari berita sesuai kategori dan id
  const newsItem = data[category]?.find((item) => item.id === Number(id));

  // Berita lainnya dari kategori yang sama
  const otherPosts = data[category]?.filter((item) => item.id !== Number(id));

  if (!newsItem) {
    return <div className="min-h-screen flex justify-center items-center">{language === 'en' ? 'News not found.' : 'Berita tidak ditemukan.'}</div>;
  }

return (
  <div className="min-h-screen flex flex-col bg-gray-100">
    <Header />

    {/* Hero Section */}
    <section className="relative w-full h-[50vh] rounded-b-lg overflow-hidden">
      <img 
        src={newsItem.image} 
        alt={newsItem.title[language]} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute bottom-6 left-6">
        {/* Breadcrumb */}
        <nav className="text-white text-sm mb-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/news" className="hover:underline">
            {language === "id" ? "Berita & Kegiatan" : "News & Activities"}
          </Link>
        </nav>

        {/* Judul Berita */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight max-w-3xl">
          {newsItem.title[language]}
        </h1>

        {/* Tanggal Berita */}
        <p className="text-white text-sm mt-1">
          {new Date(newsItem.date).toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
            day: "numeric", month: "long", year: "numeric"
          })}
        </p>
      </div>
    </section>


    {/* Main Content */}
    <main className="flex-grow container mx-auto p-4 flex flex-col md:flex-row gap-4">
      
      {/* Deskripsi Lengkap */}
      <div className="w-full md:w-2/3 space-y-6 pr-0 md:pr-6">
        {newsItem.content?.map((item, index) => {
          if (item.type === "text") {
            return <p key={index} className="text-gray-700 leading-relaxed">{item.value[language]}</p>;
          } else if (item.type === "image") {
            return (
              <div key={index} className="space-y-2">
                <img 
                  src={item.value} 
                  alt={`Image ${index + 1}`} 
                  className="w-full rounded-lg shadow-md"
                />
                {item.caption && <p className="text-sm text-gray-500 text-center italic">{item.caption[language]}</p>}
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-1/3 space-y-8">
        {/* Kategori */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">{language === 'en' ? 'Category' : 'Kategori'}</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/news?tab=company" className="text-blue-600 hover:underline">
                {language === 'en' ? 'Company News' : 'Berita Perusahaan'}
              </Link>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'en'
                  ? 'Latest updates and innovations from our company.'
                  : 'Berita tentang perkembangan dan inovasi terbaru di perusahaan kami.'}
              </p>
            </li>
            <li>
              <Link href="/news?tab=csr" className="text-blue-600 hover:underline">
                {language === 'en' ? 'CSR Activities' : 'Kegiatan CSR'}
              </Link>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'en'
                  ? 'Company’s social responsibility activities focused on communities and the environment.'
                  : 'Kegiatan sosial perusahaan yang berfokus pada masyarakat dan lingkungan.'}
              </p>
            </li>
          </ul>
        </div>

        {/* Berita Lainnya */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">{language === 'en' ? 'Other News' : 'Berita Lainnya'}</h2>
          <ul>
            {otherPosts.map((post) => (
              <li key={post.id} className="flex items-start mb-4 gap-4">
                <img 
                  src={post.image} 
                  alt={`Image ${post.title[language]}`} 
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <Link href={`/news/${category}/${post.id}`} className="text-blue-600 hover:underline">
                    <h3 className="font-medium leading-snug">{post.title[language]}</h3>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
}