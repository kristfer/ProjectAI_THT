function Diagnosa() {
  let selectedSymptoms = document.querySelectorAll(
    'input[name="symtomp"]:checked'
  );
  let totalSelectedSymptoms = selectedSymptoms.length;

  let presentasePenyakit = {};

  selectedSymptoms.forEach((selectedSymptom) => {
    let selectedSymptomValue = parseInt(selectedSymptom.value);

    let namaPenyakit = [
      { name: "CONTRACT ULCERS", symtomps: [3, 16] },
      { name: "ABAES PARAFARINGEAL", symtomps: [3, 19] },
      { name: "ABAES PERITONAILER", symtomps: [1, 2, 7, 14, 16, 22] },
      { name: "BAROTITIS MEDIA", symtomps: [2, 6] },
      { name: "DEVIASI SEPTUM", symtomps: [1, 5, 6, 15, 25, 29] },
      { name: "FARINGITIS", symtomps: [1, 3, 7, 13, 14] },
      { name: "KANKER LARING", symtomps: [3, 4, 7, 13, 16, 23, 24] },
      { name: "KANKER LEHER DAN KEPALA", symtomps: [3, 12, 15, 21, 30, 31] },
      { name: "KANKER LEHER METASTATIK", symtomps: [12] },
      { name: "KANKER NASOFARING", symtomps: [5, 15] },
      { name: "KANKER TONSIL", symtomps: [7, 12] },
      { name: "LARINGITIS", symtomps: [1, 3, 14, 19, 37] },
      { name: "NEURONITIS VESTIBULARIS", symtomps: [10, 17] },
      { name: "OSTEOSKLEROSIS", symtomps: [20, 35] },
      { name: "OTITIS MEDIA AKUT", symtomps: [1, 6, 10, 32] },
      { name: "MENIERE", symtomps: [6, 10, 34, 36] },
      { name: "TONSILITIS", symtomps: [1, 2, 3, 4, 7, 10] },
      { name: "TUMOR SYARAF PENDENGARAN", symtomps: [2, 20, 38] },
      { name: "VERTIGO POSTULAR", symtomps: [17] },
      {
        name: "SINUSITIS MAKSILARIS",
        symtomps: [1, 2, 4, 5, 8, 9, 11, 28, 33],
      },
      { name: "SINUSITIS FRONTALIS", symtomps: [1, 2, 4, 5, 8, 9, 11, 18] },
      {
        name: "SINUSITIS ETMOIDALIS",
        symtomps: [1, 2, 4, 5, 8, 9, 11, 18, 26, 27],
      },
      {
        name: "SINUSITIS SFENOIDALIS",
        symtomps: [1, 2, 4, 5, 6, 8, 9, 11, 12],
      },
      { name: "PERUT", symtomps: [1, 2, 3, 4] },
    ];

    namaPenyakit.forEach((penyakit) => {
      if (penyakit.symtomps.includes(selectedSymptomValue)) {
        if (!presentasePenyakit[penyakit.name]) {
          presentasePenyakit[penyakit.name] = 0;
        }
        presentasePenyakit[penyakit.name]++;
      }
    });
  });

  for (let penyakit in presentasePenyakit) {
    presentasePenyakit[penyakit] = (
      (presentasePenyakit[penyakit] / totalSelectedSymptoms) *
      100
    ).toFixed(2);
  }

  let totalPresentase = 0;
  for (let penyakit in presentasePenyakit) {
    totalPresentase += parseFloat(presentasePenyakit[penyakit]);
  }

  if (totalPresentase > 100) {
    for (let penyakit in presentasePenyakit) {
      presentasePenyakit[penyakit] = (
        (parseFloat(presentasePenyakit[penyakit]) / totalPresentase) *
        100
      ).toFixed(2);
    }
    totalPresentase = 100;
  }

//perbandingan Persentase Penyakit
  let sortedPenyakit = Object.keys(presentasePenyakit).sort(
    (a, b) =>
      parseFloat(presentasePenyakit[b]) - parseFloat(presentasePenyakit[a])
  );

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h3> Presentase Penyakit yang Mungkin Terkena </h3>";
  if (sortedPenyakit.length > 0) {
    resultDiv.innerHTML += "<ul>";
    sortedPenyakit.forEach((penyakit) => {
      resultDiv.innerHTML +=
        "<li>" + penyakit + ": " + presentasePenyakit[penyakit] + "%</li>";
    });
    resultDiv.innerHTML += "</ul>";
  } else {
    resultDiv.innerHTML +=
      "<p>Tidak ada penyakit yang mungkin terkena berdasarkan gejala yang dipilih.</p>";
  }
}
