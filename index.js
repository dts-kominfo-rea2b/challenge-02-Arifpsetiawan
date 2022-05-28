// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json")

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = []

  let fullName = (data) => {
    for (let i = 0; i < data.length; i++) {
      hasilLooping.push(data[i].namaDepan + " " + data[i].namaBelakang)
    }
  }

  fullName(dataYangAkanDilooping)

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = 0

  let hitungPria = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].jenisKelamin === "M") {
        jumlahPria++
      }
    }
  }

  hitungPria(dataYangAkanDilooping)

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = 0

  let hitungWanita = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].jenisKelamin === "F") {
        jumlahWanita++
      }
    }
  }

  hitungWanita(dataYangAkanDilooping)

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentarResult = (pria, wanita) => {
    if (pria > wanita) {
      return "Jumlah Pria lebih banyak dari Wanita"
    } else if (wanita > pria) {
      return "Jumlah Wanita lebih banyak dari Pria"
    } else {
      return "Jumlah Pria dan Wanita berimbang"
    }
  }

  let komentar = komentarResult(jumlahPria, jumlahWanita)

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  }
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai)

  console.log(hasil.hasilLooping)
  console.log(hasil.jumlahPria)
  console.log(hasil.jumlahWanita)

  return hasil
}

main(arrayObjectPegawai)

module.exports = main
