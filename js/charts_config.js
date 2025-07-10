/**
 * SCAN - Strategic Corporate Analysis Navigator
 * Configurazione Dati e Opzioni per Grafici Chart.js
 * Versione 1.2 - DATI BFLOWS S.R.L. (DA REPORT LEANUS/KITZANOS)
 *
 * Dati aggiornati sulla base dei file .md forniti per BFLOWS S.R.L. al 12/2024.
 * Eventuali dati mancanti o che richiedono normalizzazione specifica sono lasciati come esempio o commentati.
 */

// ======================================
// FUNZIONI PER RECUPERARE I DATI SPECIFICI
// ======================================

// --- Dati per Dashboard Esecutiva (dashboard.html) ---
function getTrendRicaviEbitdaData_Dashboard() {
    // console.log("Fornitura dati per trendRicaviEbitdaChart (Dashboard) - BFLOWS S.R.L.");
    // Fonte: PARTE2_bflows_analisi_economica.md (2.1.1, 2.1.2), PARTE1 (1.1)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             {
                 label: "Ricavi (€)",
                 data: [21000, 197250, 320260], // Valori assoluti
                 borderColor: 'rgb(25, 25, 112)',
                 backgroundColor: 'rgba(25, 25, 112, 0.1)',
                 type: 'line', tension: 0.1, yAxisID: 'y', fill: true, pointRadius: 3,
             },
             {
                 label: "EBITDA (€)",
                 data: [-207017, -82873, -71772], // Valori assoluti
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.7)',
                 type: 'bar', yAxisID: 'y', barPercentage: 0.6, categoryPercentage: 0.7
             },
              {
                  label: "EBITDA Margin (%)",
                  data: [-985.8, -42.0, -22.41], // Percentuale 
                  borderColor: 'rgb(217, 140, 0)',
                  backgroundColor: 'transparent',
                  type: 'line', tension: 0.1, yAxisID: 'y1', fill: false, borderDash: [5, 5], pointRadius: 3
              }
        ]
    };
}

function getTrendPfnEbitdaData_Dashboard() {
    // console.log("Fornitura dati per trendPfnEbitdaChart (Dashboard) - BFLOWS S.R.L.");
    // Fonte: PARTE1_bflows_sintesi_analisi.md, PARTE4_bflows_bancabilita_report.md (4.5.1)
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             {
                 label: "PFN/EBITDA",
                 data: [null, null, null], // EBITDA negativo - non calcolabile
                 borderColor: 'rgb(214, 34, 70)',
                 backgroundColor: 'rgba(214, 34, 70, 0.2)',
                 tension: 0.1, fill: true, pointRadius: 5, pointHoverRadius: 7,
                 pointBackgroundColor: 'rgb(214, 34, 70)'
             },
              {
                 label: 'Soglia Attenzione (<3x)',
                 data: [3, 3, 3], // Linea target (mantenuta)
                 borderColor: 'rgb(255, 193, 7)',
                 borderDash: [5, 5], fill: false, pointRadius: 0, borderWidth: 2,
             }
         ]
     };
}

// --- Dati per Report Dettagliati (report/parteX_*.html) ---

// Dati Parte 1
function getMainMetricsData() {
    // console.log("Fornitura dati per mainMetricsChart (Report Parte 1) - BFLOWS S.R.L.");
    // Fonte: PARTE1_bflows_sintesi_analisi.md (1.1 Sintesi)
     return {
         labels: ["2022", "2023", "2024"], // Rimosso previsionale
         datasets: [
             // Dati arrotondati in migliaia
             { label: "Ricavi (€000)", data: [21, 197, 320], backgroundColor: "rgba(25, 25, 112, 0.7)" },
             { label: "EBITDA (€000)", data: [-207, -83, -72], backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Patrimonio Netto (€000)", data: [244, 953, 1366], backgroundColor: "rgba(217, 140, 0, 0.7)" }
         ]
     };
}
function getCurrentAssetsLiabilitiesData() {
    // console.log("Fornitura dati per currentAssetsLiabilitiesChart (Report Parte 1) - BFLOWS S.R.L.");
    // Fonte: PARTE3_bflows_analisi_patrimoniale.md (3.1)
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "Attivo Corrente", data: [778595, 696767], backgroundColor: "rgba(25, 25, 112, 0.7)" },
             { label: "Passivo Corrente", data: [346273, 271257], backgroundColor: "rgba(214, 34, 70, 0.7)" },
             { label: "Capitale Circolante Netto", data: [432322, 425510], backgroundColor: "rgba(77, 140, 87, 0.7)" } // Calcolato: AC - PC
         ]
     };
}

// Dati Parte 2
function getEconomicTrendData() {
    // console.log("Fornitura dati per economicTrendChart (Report Parte 2) - BFLOWS S.R.L.");
    // Uguale a getTrendRicaviEbitdaData_Dashboard ma usa valori in €000 per coerenza con altre tabelle
    const dataAbs = getTrendRicaviEbitdaData_Dashboard(); // Prende i dati aggiornati
    dataAbs.datasets[0].data = dataAbs.datasets[0].data.map(v => v ? Math.round(v / 1000) : null); // Ricavi in K (arrotondati)
    dataAbs.datasets[1].data = dataAbs.datasets[1].data.map(v => v ? Math.round(v / 1000) : null); // EBITDA in K (arrotondati)
    dataAbs.datasets[0].label = "Ricavi (€000)";
    dataAbs.datasets[1].label = "EBITDA (€000)";
    return dataAbs;
}
function getMarginalityData() {
    // console.log("Fornitura dati per marginalityChart (Report Parte 2) - BFLOWS S.R.L.");
    // Fonte: PARTE2_bflows_analisi_economica.md (2.1.1, 2.1.2)
     return {
         labels: ["2022", "2023", "2024"],
         datasets: [
            // Valori percentuali dai MD
            { label: "Valore Aggiunto %", data: [100.0, 99.9, 99.8], borderColor: "rgba(25, 25, 112, 1)", fill: false },
            { label: "Margine di Contribuzione %", data: [-357.9, 16.3, 50.3], borderColor: "rgba(42, 58, 128, 1)", fill: false },
            { label: "EBITDA %", data: [-985.8, -42.0, -22.4], borderColor: "rgba(77, 140, 87, 1)", fill: false },
            { label: "EBIT %", data: [-1022.8, -47.5, -39.9], borderColor: "rgba(217, 140, 0, 1)", fill: false }
         ]
     };
}
function getProfitabilityIndicesData() {
    // console.log("Fornitura dati per profitabilityIndicesChart (Report Parte 2) - BFLOWS S.R.L.");
    // Fonte: PARTE2_bflows_analisi_economica.md (2.1.4)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "ROE %", data: [-82.46, -9.73, -3.52], borderColor: "rgba(25, 25, 112, 1)", backgroundColor: "rgba(25, 25, 112, 0.2)", fill: true},
            { label: "ROI %", data: [-23.74, -6.48, -6.87], borderColor: "rgba(77, 140, 87, 1)", backgroundColor: "rgba(77, 140, 87, 0.2)", fill: true},
            { label: "ROS %", data: [-1022.8, -47.5, -39.9], borderColor: "rgba(217, 140, 0, 1)", backgroundColor: "rgba(217, 140, 0, 0.2)", fill: true}
        ]
    };
}
function getLeverageData() {
     // console.log("Fornitura dati per leverageChart (Report Parte 2) - BFLOWS S.R.L.");
     // Fonte: PARTE2_bflows_analisi_economica.md (2.1.5)
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "ROI (%)", data: [-6.48, -6.87], backgroundColor: "rgba(25, 25, 112, 0.7)"},
             { label: "ROE (%)", data: [-9.73, -3.52], backgroundColor: "rgba(77, 140, 87, 0.7)"}
         ]
     };
}
function getBenchmarkRadarData() {
    // console.log("Fornitura dati per benchmarkRadarChart (Report Parte 2) - BFLOWS S.R.L.");
    // Fonte: PARTE2_bflows_analisi_economica.md (2.2.2)
    return {
        labels: ["Crescita Ricavi", "EBITDA Margin", "ROI", "Turnover", "Costo Personale (inv)", "PFN/EBITDA (inv)", "D/E (inv)"],
        datasets: [
            {
                label: "BFLOWS S.R.L.",
                data: [250, 0, 0, 21, 98, 0, 250], // Normalizzato: Crescita 62.36% vs 15-25%, EBITDA -22.4% vs 15-20%, ROI -6.87% vs 15-20%, Turnover 0.17 vs 0.8-1.2, Costo personale 50.8% vs 40-50%, PFN/EBITDA NOK, D/E 0.40 vs 0.3-0.5
                backgroundColor: "rgba(25, 25, 112, 0.3)", borderColor: "rgba(25, 25, 112, 1)", borderWidth: 2, pointBackgroundColor: "rgba(25, 25, 112, 1)"
            },
            {
                label: "Media Settore IT", 
                data: [100, 100, 100, 100, 100, 100, 100], 
                backgroundColor: "rgba(217, 140, 0, 0.3)", borderColor: "rgba(217, 140, 0, 1)", borderWidth: 2, pointBackgroundColor: "rgba(217, 140, 0, 1)"
            }
        ]
    };
}

// Dati Parte 3
function getAssetsData() {
    // console.log("Fornitura dati per assetsChart (Report Parte 3) - BFLOWS S.R.L.");
    // Fonte: PARTE3_bflows_analisi_patrimoniale.md (3.1, 3.2 - dati 2024)
    const originalData = [4227, 2000, 1478014, 0, 304300, 53476]; // Imm.Mat, Imm.Fin, Imm.Imm, Riman., Cred.Clienti, Liquidità
    const total = originalData.reduce((a, b) => a + b, 0);
    return {
        labels: ["Immob. Materiali", "Immob. Finanziarie", "Immob. Immateriali", "Magazzino", "Crediti Comm.", "Liquidità"],
        _originalData: originalData, // Valori originali per tooltip
        datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4a69bd", "#F44336", "#FFC107", "#4CAF50", "#6c757d"] // Palette definita
         } ]
    };
}
function getLiabilitiesData() {
    // console.log("Fornitura dati per liabilitiesChart (Report Parte 3) - BFLOWS S.R.L.");
    // Fonte: PARTE3_bflows_analisi_patrimoniale.md (3.1, 3.3 - dati 2024)
    const originalData = [1366106, 507872, 35773, 163063, 108194]; // PN, Debt Fin MLT, Debt Fin BT, Debt Comm., Altri Debiti
    const total = originalData.reduce((a, b) => a + b, 0);
     return {
         labels: ["Patrimonio Netto", "Debiti Fin. MLT", "Debiti Fin. BT", "Debiti Comm.", "Altri Debiti"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd", "#6c757d"] // Palette coerente
        } ]
     };
}
function getInvestmentsStructureData() {
    // console.log("Fornitura dati per investmentsStructureChart (Report Parte 3) - BFLOWS S.R.L.");
    // Fonte: PARTE3_bflows_analisi_patrimoniale.md (3.1, 3.2)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             // Dati assoluti
             { label: "Immobilizzazioni", data: [794639, 1167302, 1484241], backgroundColor: "rgba(25, 25, 112, 0.7)", stack: "Stack 0" },
             { label: "Crediti commerciali", data: [4880, 170800, 304300], backgroundColor: "rgba(77, 140, 87, 0.7)", stack: "Stack 0" },
             { label: "Rimanenze", data: [0, 0, 0], backgroundColor: "rgba(217, 140, 0, 0.7)", stack: "Stack 0" },
             { label: "Liquidità", data: [16726, 154937, 53476], backgroundColor: "rgba(79, 109, 122, 0.7)", stack: "Stack 0" }
        ]
    };
}
function getEquityCompositionData() {
    // console.log("Fornitura dati per equityCompositionChart (Report Parte 3) - BFLOWS S.R.L.");
    // Fonte: PARTE3_bflows_analisi_patrimoniale.md (3.3 - dati 2024)
    const originalData = [14164, 1400047, -48105, 0]; // Capitale Sociale, Riserve, Perdita d'esercizio, Utili a Nuovo (assunto 0)
    const total = originalData.reduce((a, b) => a + b, 0); // Should match 1366106
     return {
         labels: ["Capitale Sociale", "Riserve", "Utile/Perdita Esercizio", "Utili a Nuovo"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd"]
        } ]
     };
}
function getFinancialDebtSourcesData() { // Rinominato da getFinancialDebtData per evitare conflitti
    // console.log("Fornitura dati per financialDebtSourcesChart (Report Parte 3) - BFLOWS S.R.L.");
    // Fonte: PARTE3_bflows_analisi_patrimoniale.md (3.1, 3.3 - dati 2024)
    const originalData = [1366106, 507872, 35773]; // PN, Debt Fin MLT, Debt Fin BT
    const total = originalData.reduce((a, b) => a + b, 0);
    return {
        labels: ["Patrimonio Netto", "Debiti Fin. MLT", "Debiti Fin. BT"],
        _originalData: originalData,
        datasets: [{
            data: originalData.map(v => total > 0 ? (v / total) * 100 : 0), // Dati %
            backgroundColor: ["#191970", "#4CAF50", "#FFC107"]
        }]
    };
}
function getPfnTrendData() {
    // console.log("Fornitura dati per pfnTrendChart (Report Parte 3) - BFLOWS S.R.L.");
    // Fonte: PARTE3_bflows_analisi_patrimoniale.md (3.4)
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "Debiti Finanziari Tot.", data: [677682, 646914, 543645], type: "bar", backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
             { label: "Liquidità", data: [16726, 154937, 53476], type: "bar", backgroundColor: "rgba(77, 140, 87, 0.7)", yAxisID: 'y'},
             { label: "PFN", data: [660956, 491977, 490169], type: "line", borderColor: "rgba(25, 25, 112, 1)", fill: false, yAxisID: 'y' }
         ]
     };
}

// Dati Parte 4
function getDebtSustainabilityData() {
    // console.log("Fornitura dati per debtSustainabilityChart (Report Parte 4) - BFLOWS S.R.L.");
    // Fonte: PARTE4_bflows_bancabilita_report.md (4.2.1)
     return {
         labels: ["PFN/EBITDA (inv)", "D/E (inv)", "DSCR", "Oneri Fin./Ricavi (inv)", "Cash Flow Op./Ricavi", "Leanus Score"], // Invertiti D/E e OF/Ricavi
         datasets: [
             { label: "BFLOWS S.R.L.", data: [0, 90, 82, 30, 0, 41], backgroundColor: "rgba(25, 25, 112, 0.2)", borderColor: "rgba(25, 25, 112, 1)" }, // PFN/EBITDA NOK, D/E 0.40 (inv 90), DSCR 1.637 (82), OF/Ricavi 3.53% (inv 30), CF/Ricavi -27.14% (0), Leanus 4.05/10 (41)
             { label: "Target/Benchmark", data: [67, 67, 60, 67, 50, 60], backgroundColor: "rgba(77, 140, 87, 0.2)", borderColor: "rgba(77, 140, 87, 1)" } // Target PFN/EBITDA <3, D/E <1.5, DSCR >1.2, OF/Ricavi <3%, CF/Ricavi >10%, Leanus >6
         ]
     };
}
function getDebtCostData() { // Grafico Capacità Indebitamento
    // console.log("Fornitura dati per debtCostChart (Report Parte 4) - BFLOWS S.R.L.");
    // Fonte: PARTE4_bflows_bancabilita_report.md (4.3, 4.7.2)
    return {
         labels: ["2022", "2023", "2024", "Scenario Conservativo", "Scenario Realista"],
         datasets: [
             // Dati arrotondati in migliaia
             { label: "EBITDA (€000)", data: [-207, -83, -72, 10, 19], type: "bar", yAxisID: "y", backgroundColor: "rgba(77, 140, 87, 0.7)" }, // EBITDA attuale + scenari 3% e 6% sui ricavi
             { label: "Capacità Teorica Indeb. (€000)", data: [0, 0, 399, 200, 500], type: "line", yAxisID: "y", borderColor: "rgba(25, 25, 112, 1)", fill: false } // Capacità incrementale da 4.3 e scenari da 4.7.2
         ]
     };
}

// Dati Parte 5
function getWorkingCapitalCycleData() {
    // console.log("Fornitura dati per workingCapitalCycleChart (Report Parte 5) - BFLOWS S.R.L.");
    // Fonte: PARTE5_bflows_circolante_report.md (5.1.1, 5.1.2, 5.1.3, 5.1.4)
    return {
        labels: ["Crediti Clienti (DSO)", "Magazzino (DIO)", "Debiti Fornitori (DPO)", "Ciclo Circolante"],
        datasets: [
            // Dati 2024 per BFLOWS, Benchmark da 5.1.3
            { label: "BFLOWS S.R.L. (Giorni)", data: [343, 0, 256, 87], backgroundColor: "rgba(25, 25, 112, 0.7)" },
            { label: "Benchmark Settore (Giorni)", data: [45, 5, 45, 5], backgroundColor: "rgba(77, 140, 87, 0.7)" } // Benchmark DSO=45, DIO=5, DPO=45 -> Ciclo=5
        ]
    };
}
function getCashFlowWaterfallData() {
    // console.log("Fornitura dati per cashFlowWaterfallChart (Report Parte 5) - BFLOWS S.R.L.");
    // Fonte: PARTE5_bflows_circolante_report.md (5.2.1)
    // Calcolo: EBITDA(-71772) - Imposte(13823) + DeltaCirc(-164916) = CFO(-86913) - Invest(-372780) = FCF(-459693) + DeltaDebt(-103269) + DeltaEquity(461501) = DeltaCassa(-101461)
     return {
         labels: ["EBITDA", "Imposte", "+Δ Circ.", "=CF Op.", "-Invest.", "=FCF", "+Δ Debt", "+Δ Equity", "=Δ Cassa"],
         datasets: [{
             data: [-71772, 13823, -164916, -86913, -372780, -459693, -103269, 461501, -101461],
             backgroundColor: [ // Colori significativi
                 '#F44336', // EBITDA (negativo)
                 '#4CAF50', // Imposte (positivo - credito fiscale)
                 '#F44336', // Delta Circ. (negativo)
                 '#F44336', // CF Op (negativo)
                 '#F44336', // Investimenti (negativo)
                 '#F44336', // FCF (negativo)
                 '#F44336', // Delta Debt (negativo)
                 '#4CAF50', // Delta Equity (positivo)
                 '#F44336'  // Delta Cassa (negativo)
             ]
         }]
     };
}
function getCashFlowTrendData() {
    // console.log("Fornitura dati per cashFlowTrendChart (Report Parte 5) - BFLOWS S.R.L.");
    // Fonte: PARTE5_bflows_circolante_report.md (5.2.2)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Cash Flow Operativo", data: [-122901, -249057, -86913], borderColor: "rgba(77, 140, 87, 1)", fill: true, backgroundColor: "rgba(77, 140, 87, 0.1)"},
            { label: "Cash Flow Investimenti", data: [-267678, -383456, -372780], borderColor: "rgba(214, 34, 70, 1)", fill: true, backgroundColor: "rgba(214, 34, 70, 0.1)" },
            { label: "Variazione Netta di Cassa", data: [-310142, 138211, -101461], borderColor: "rgba(25, 25, 112, 1)", fill: true, backgroundColor: "rgba(25, 25, 112, 0.1)" }
        ]
    };
}
function getCashFlowProjectionData() {
    // console.log("Fornitura dati per cashFlowProjectionChart (Report Parte 5) - BFLOWS S.R.L.");
    // Fonte: PARTE5_bflows_circolante_report.md (5.2.3)
    return {
        labels: ["2024", "2025E", "2026E", "2027E", "2028E"],
        datasets: [
            // Dati 2024 reali + Proiezioni
            { label: "Cash Flow Operativo", data: [-86913, 127965, 137858, 1343301, 2547371], type: 'bar', backgroundColor: "rgba(79, 109, 122, 0.7)", yAxisID: 'y' },
            { label: "Cash Flow Finanziamento", data: [358232, 29053, -171442, 0, 0], type: 'bar', backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
            { label: "Liquidità Finale", data: [53476, 407400, 249816, 1215117, 3269488], type: 'line', borderColor: "rgba(77, 140, 87, 1)", fill: false, yAxisID: 'y1' }
        ]
    };
}

// Dati Parte 6
function getZscoreData() {
    // console.log("Fornitura dati per zscoreChart (Report Parte 6) - BFLOWS S.R.L.");
    // Fonte: PARTE6_bflows_analisi_rischi.md (6.2)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Z-Score", data: [null, null, 2.38], borderColor: "rgba(25, 25, 112, 1)", fill: false }, // Solo Z-Score 2024 disponibile
            { label: "Soglia Sicurezza", data: [2.99, 2.99, 2.99], borderColor: "rgba(77, 140, 87, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 },
            { label: "Soglia Rischio", data: [1.81, 1.81, 1.81], borderColor: "rgba(214, 34, 70, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 }
        ]
    };
}
function getRiskIndicatorsData() {
     // console.log("Fornitura dati per riskIndicatorsChart (Report Parte 6) - BFLOWS S.R.L.");
     // Fonte: PARTE6_bflows_analisi_rischi.md (6.1, 6.2, 6.8)
    return {
        labels: ["ROI", "ROS", "D/E (inv)", "Cop. Immob.", "DSO (inv)", "DPO"],
        datasets: [{
             label: "BFLOWS S.R.L.",
             data: [0, 0, 90, 92, 13, 256], // ROI -6.87%, ROS -39.85%, D/E 0.40 (inv 90), Cop.Immob 0.92, DSO 343 (inv 13), DPO 256
             backgroundColor: "rgba(136, 141, 194, 0.5)", borderColor: "rgba(97, 103, 173, 1)", borderWidth: 2
            }, {
             label: "Target/Benchmark",
             data: [15, 10, 67, 100, 67, 45], // Target ROI 15%, ROS 10%, D/E <1.5 (inv 67), Cop.Immob 1.0, DSO 45 (inv 67), DPO 45
             backgroundColor: "rgba(145, 190, 145, 0.4)", borderColor: "rgba(103, 167, 103, 1)", borderWidth: 2
        }]
    };
}
function getSensitivityData() {
    // console.log("Fornitura dati per sensitivityChart (Report Parte 6) - BFLOWS S.R.L.");
    // Fonte: PARTE6_bflows_analisi_rischi.md (6.5, 6.6)
     return {
         labels: ["Ricavi (%)", "Costi Fissi (%)", "Crediti Clienti (gg)", "Debiti Fornitori (gg)"],
         datasets: [{
             label: "Variazione Critica",
             data: [79.26, -54.82, 61, -83], // Valori da Tabella 6.5.1
             backgroundColor: ["#4CAF50", "#F44336", "#F44336", "#F44336"] // Colori per impatto (positivo/negativo/negativo/negativo)
         }]
     };
}


// ======================================
// OPZIONI COMUNI PER I GRAFICI (INVARIATE)
// ======================================
// --- Utility di formattazione ---
function formatCurrency(value, decimals = 0) {
    if (value === null || value === undefined || isNaN(value)) return 'N/D';
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
}

function formatPercentage(value, decimals = 1) {
    if (value === null || value === undefined || isNaN(value)) return 'N/D';
    return value.toFixed(decimals) + '%';
}

const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: { boxWidth: 12, padding: 15, font: { size: 11 } }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: { weight: 'bold', size: 13 },
            bodyFont: { size: 12 },
            padding: 10,
            cornerRadius: 4,
            displayColors: true,
            boxPadding: 4,
            callbacks: { // Callback di default migliorato
                 label: function(context) {
                     let label = context.dataset.label || context.label || '';
                     if (label) label += ': ';
                     let value = context.parsed.y;
                      if (value === null || value === undefined) value = context.parsed.r; // Per radar

                     if (value !== null && value !== undefined) {
                         const axisID = context.dataset.yAxisID;
                         const labelText = context.label || ''; // Assicurati che labelText sia una stringa
                         const datasetLabel = context.dataset.label || ''; // Assicurati che datasetLabel sia una stringa

                          if (datasetLabel.includes('%') || (axisID === 'y1' && context.chart.options.scales?.y1?.title?.text.includes('%'))) {
                             label += formatPercentage(value);
                          } else if (datasetLabel.includes('(Giorni)') || labelText.includes('(gg)')) {
                             label += value.toFixed(0) + ' gg';
                          } else if (datasetLabel.includes('(x)') || labelText.includes('(x)') || datasetLabel.includes('PFN/EBITDA') || datasetLabel.includes('D/E') || datasetLabel.includes('Z-Score')) {
                             label += value.toFixed(2) + (datasetLabel.includes('Z-Score') ? '' : 'x');
                          } else if (datasetLabel.includes('Score') && !datasetLabel.includes('Z-Score')) {
                              label += value.toFixed(2);
                          } else if (datasetLabel.includes('Variazione Critica')) { // Per grafico sensitività
                               label += value.toFixed(2) + (labelText.includes('(gg)') ? ' gg' : '%');
                          }
                          else if (Math.abs(value) >= 1000000) {
                             label += formatCurrency(value / 1000000, 2) + ' M';
                         } else if (Math.abs(value) >= 1000) {
                             label += formatCurrency(value / 1000, 0) + ' K'; // Mostra K€ per valori >= 1000
                         } else if (Math.abs(value) < 1 && value !== 0) {
                             label += formatCurrency(value, 2); // Decimali per valori < 1
                         }
                         else {
                              label += formatCurrency(value, 0); // Valori assoluti < 1000 senza decimali
                         }
                     } else {
                         label += 'N/D';
                     }
                     return label;
                 }
             }
        }
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: { font: { size: 11 } }
        },
        y: {
            grid: { color: '#e0e0e0', borderDash: [2, 3] },
            ticks: {
                font: { size: 11 },
                // Formattazione assi Y per K€ o M€
                 callback: function(value, index, ticks) {
                      if (Math.abs(value) >= 1000000) {
                          return (value / 1000000) + ' M';
                      } else if (Math.abs(value) >= 1000) {
                          return (value / 1000) + ' K';
                      } else if (Math.abs(value) < 10 && value !== 0) {
                           return value.toFixed(2); // Decimali per valori piccoli (es. rapporti)
                      } else if (Number.isInteger(value)) {
                          return value.toFixed(0); // Interi senza decimali
                      }
                      return value; // Default
                  }
            }
        },
        // Eventuale asse Y1 per percentuali o altri indici
        y1: {
            position: 'right',
            grid: { display: false }, // Nasconde griglia asse dx
            ticks: {
                 font: { size: 11 },
                 callback: function(value, index, ticks) {
                     // Esempio: Formattazione % per asse Y1
                     // if (context.chart.options.scales.y1.title.text.includes('%')) {
                         return value.toFixed(1) + '%';
                     // }
                     // return value.toFixed(1) + 'x'; // O altra unità
                 }
            }
        }
    },
    animation: { duration: 400 }
};

// Opzioni specifiche per grafici a torta/ciambella
const pieChartOptions = {
    ...commonChartOptions,
    cutout: '0%',
     plugins: {
         ...commonChartOptions.plugins,
        tooltip: {
             ...commonChartOptions.plugins.tooltip,
            callbacks: { // Callback specifico per Torta/Ciambella
                label: function(context) {
                    const label = context.label || '';
                    const value = context.raw || 0; // Usa valore raw (percentuale)
                    // Cerca il valore originale corrispondente
                    const originalValue = context.dataset._originalData && context.dataset._originalData.length > context.dataIndex
                                          ? context.dataset._originalData[context.dataIndex]
                                          : value; // Fallback se _originalData non è definito o non ha l'indice
                    const percentage = formatPercentage(value); // Formatta la percentuale
                    // Formatta il valore originale in K€ o M€ se necessario
                    let formattedOriginalValue;
                    if (Math.abs(originalValue) >= 1000000) {
                        formattedOriginalValue = formatCurrency(originalValue / 1000000, 2) + ' M';
                    } else if (Math.abs(originalValue) >= 1000) {
                         formattedOriginalValue = formatCurrency(originalValue / 1000, 0) + ' K';
                    } else {
                         formattedOriginalValue = formatCurrency(originalValue, 0);
                    }
                    return `${label}: ${formattedOriginalValue} (${percentage})`;
                }
            }
        }
     },
     scales: undefined // Rimuove gli assi per grafici a torta
};
const doughnutChartOptions = { ...pieChartOptions, cutout: '50%' };

// Opzioni specifiche per grafici radar
const radarChartOptions = {
     ...commonChartOptions,
      scales: {
         r: {
             angleLines: { color: '#e0e0e0' },
             grid: { color: '#e0e0e0' },
             pointLabels: { font: { size: 10 } },
             ticks: {
                 backdropColor: 'rgba(255, 255, 255, 0.75)',
                 font: { size: 9 },
                 maxTicksLimit: 5,
                 // callback: function(value) { return value + '%'; } // Esempio se scala è %
             },
             suggestedMin: 0,
             // suggestedMax: 150 // Adattare se necessario per i dati normalizzati
         }
      },
      plugins: {
          ...commonChartOptions.plugins,
          tooltip: {
              ...commonChartOptions.plugins.tooltip,
               callbacks: {
                   label: function(context) {
                       let label = context.dataset.label || '';
                       if (label) label += ': ';
                       if (context.parsed.r !== null) {
                          label += context.parsed.r.toFixed(1); // Valore asse radiale
                       }
                       return label;
                   }
               }
          }
      }
};

console.log("charts_config.js caricato e aggiornato con dati BFLOWS S.R.L. (dove disponibili).");