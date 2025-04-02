function navigateTo(page) {
    if (page === 'ottv') {
        window.location.href = 'ottv.html';
    }
}
function hitungOTTV() {
    let wwr = parseFloat(document.getElementById("wwr").value);
    let deltaT = parseFloat(document.getElementById("deltaT").value);
    let luasFasad = parseFloat(document.getElementById("luasFasad").value);
    let uValueDinding = parseFloat(document.getElementById("materialDinding").value);

    let kacaValues = document.getElementById("materialKaca").value.split(",");
    let uValueKaca = parseFloat(kacaValues[0]);
    let SC = parseFloat(kacaValues[1]);

    let radiasiMatahari = parseFloat(document.getElementById("arahRadiasi").value);
    let shadingModifier = parseFloat(document.getElementById("shadingDevice").value);

    if (isNaN(wwr) || isNaN(deltaT) || isNaN(luasFasad) || isNaN(uValueDinding) || isNaN(uValueKaca) || isNaN(SC) || isNaN(radiasiMatahari) || isNaN(shadingModifier)) {
        alert("Harap isi semua data dengan benar!");
        return;
    }

    // SC yang dimodifikasi berdasarkan shading device
    let SC_modified = SC * shadingModifier;

    let OTTV = ((1 - wwr) * uValueDinding * deltaT) +
               (wwr * ((uValueKaca * deltaT) + (SC_modified * radiasiMatahari)));

    document.getElementById("hasilOTTV").innerText = OTTV.toFixed(2);
}<button onclick="pindahHalaman()">Pilih Tata Guna Lahan</button>



