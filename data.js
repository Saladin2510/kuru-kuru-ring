const nama = "Saladin Octiano Bonanza"
let usia = 14
let no = 26
let sekolah = "SMP N 1 AJIBARANG"
let kelas = "IX D"
let mapel = "IT, MIPA & Bahasa"

// let biodata = document.getElementById('biodata')
// console.log(biodata)

function generateBiodata() { 
    console.log(`haloo nama saya ${nama} dan usia saya ${14} tahun, saya duduk di kelas ${kelas} dengan no absen ${no} di sekolah ${sekolah}, dan saya menyukai mapel ${mapel}.`)
 }

 generateBiodata()

function generateBiodata1 () {
    let golongan

    if (usia > 2 && usia < 10) {
        golongan = "masih golongan bocil "
        // console.log('elu masih bocil bro...')
    }
    else if (usia > 10  && usia < 18) { // false or truth
        golongan = "golongan remaja "
        // kondisi pertama
        // console.log('saya remaja loh...')
    }
    else if (usia > 18 && usia <  30){
        golongan="golongan dewasa"
        // console.log('elu dewasa yaa...')
    }
    else if (usia >= 30){
        golongan="elu masuk golongan tua "
        // console.log('elu mah tua broo...')
    }
    else{
        golongan="galongan jenis agak laen"
        // kondisi yang tidak terpenuhi (false)
        // console.log('elu jenis manusia apa broo???')
    }

//    return biodata.innerHTML = golongan
    return console.log(`golongan saya adalah ${golongan}`)
}
generateBiodata1()