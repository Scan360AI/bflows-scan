/**
 * SCAN - Strategic Corporate Analysis Navigator
 * Configurazione dati per grafici e dashboard
 * Versione 1.2 - Robusta
 * Azienda: BFLOWS S.R.L.
 */

/**
 * Dati per il grafico di trend economico (ricavi, EBITDA, utile)
 * @returns {object} Configurazione per Chart.js
 */
function getEconomicTrendData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Ricavi',
                data: [21000, 197250, 320260],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: 'EBITDA',
                data: [-207017, -82873, -71772],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: 'Utile Netto',
                data: [-201145, -92724, -48105],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.4
            }
        ]
    };
}

/**
 * Dati per il grafico di composizione patrimoniale
 * @returns {object} Configurazione per Chart.js
 */
function getBalanceSheetData() {
    return {
        labels: ['Immobilizzazioni', 'Crediti Commerciali', 'Altri Crediti', 'Liquidità'],
        datasets: [
            {
                label: 'Composizione Attivo 2024',
                data: [1484241, 304300, 338991, 53476],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

/**
 * Dati per il grafico di composizione delle fonti
 * @returns {object} Configurazione per Chart.js
 */
function getSourcesCompositionData() {
    return {
        labels: ['Patrimonio Netto', 'Debiti Finanziari MLT', 'Debiti Finanziari BT', 'Debiti Commerciali', 'Altri Debiti'],
        datasets: [
            {
                label: 'Composizione Passivo 2024',
                data: [1366106, 507872, 35773, 163063, 108194],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

/**
 * Dati per il grafico radar degli indicatori chiave
 * @returns {object} Configurazione per Chart.js
 */
function getKeyIndicatorsRadarData() {
    return {
        labels: ['Crescita Ricavi', 'EBITDA Margin', 'ROI', 'Leva Finanziaria', 'Liquidità', 'DSO'],
        datasets: [
            {
                label: 'BFLOWS S.R.L.',
                data: [90, 10, 15, 80, 65, 20],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)'
            },
            {
                label: 'Benchmark Settore',
                data: [60, 70, 65, 60, 55, 70],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    };
}

/**
 * Dati per il grafico di evoluzione del capitale circolante
 * @returns {object} Configurazione per Chart.js
 */
function getWorkingCapitalData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Giorni Crediti Clienti',
                data: [84, 312, 343],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                type: 'line',
                yAxisID: 'y'
            },
            {
                label: 'Giorni Debiti Fornitori',
                data: [369, 324, 256],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                type: 'line',
                yAxisID: 'y'
            },
            {
                label: 'Ciclo del Circolante',
                data: [-285, -12, 87],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                type: 'bar',
                yAxisID: 'y1'
            }
        ]
    };
}

/**
 * Dati per il grafico di evoluzione della PFN
 * @returns {object} Configurazione per Chart.js
 */
function getPFNTrendData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'PFN',
                data: [660956, 491977, 490169],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                type: 'line',
                yAxisID: 'y'
            },
            {
                label: 'PFN/PN',
                data: [2.71, 0.52, 0.36],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                type: 'line',
                yAxisID: 'y1'
            }
        ]
    };
}

/**
 * Dati per il grafico di composizione dei costi
 * @returns {object} Configurazione per Chart.js
 */
function getCostCompositionData() {
    return {
        labels: ['Costo del personale', 'Altri costi fissi', 'Ammortamenti', 'Oneri diversi', 'Oneri finanziari'],
        datasets: [
            {
                label: 'Composizione Costi 2024',
                data: [162516, 70259, 55841, 11583, 11293],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

/**
 * Dati per il grafico di evoluzione degli indici di redditività
 * @returns {object} Configurazione per Chart.js
 */
function getProfitabilityIndicesData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'ROI',
                data: [-23.74, -6.48, -6.87],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            },
            {
                label: 'ROE',
                data: [-82.46, -9.73, -3.52],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            },
            {
                label: 'ROS',
                data: [-1022.8, -47.5, -39.9],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2
            }
        ]
    };
}

/**
 * Dati per il grafico di evoluzione degli indici di solidità
 * @returns {object} Configurazione per Chart.js
 */
function getSolidityIndicesData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Copertura Immobilizzazioni',
                data: [0.31, 0.82, 0.92],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            },
            {
                label: 'Indice di Struttura Secondario',
                data: [1.16, 1.37, 1.27],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2
            },
            {
                label: 'Leva Finanziaria (D/E)',
                data: [2.78, 0.68, 0.40],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2
            },
            {
                label: 'Autonomia Finanziaria',
                data: [0.22, 0.49, 0.63],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }
        ]
    };
}

/**
 * Dati per il grafico di evoluzione dei flussi di cassa
 * @returns {object} Configurazione per Chart.js
 */
function getCashFlowTrendData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Cash Flow Operativo',
                data: [-122901, -249057, -86913],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                type: 'line'
            },
            {
                label: 'Cash Flow Investimenti',
                data: [-267678, -383456, -372780],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                type: 'line'
            },
            {
                label: 'Variazione Netta di Cassa',
                data: [-310142, 138211, -101461],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                type: 'bar'
            }
        ]
    };
}

/**
 * Dati per il grafico di proiezione dei flussi di cassa
 * @returns {object} Configurazione per Chart.js
 */
function getCashFlowProjectionData() {
    return {
        labels: ['2025', '2026', '2027', '2028'],
        datasets: [
            {
                label: 'Cash Flow Operativo',
                data: [127965, 137858, 1343301, 2547371],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                type: 'line'
            },
            {
                label: 'Cash Flow Investimenti',
                data: [196907, -124000, -378000, -493000],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                type: 'line'
            },
            {
                label: 'Liquidità finale',
                data: [407400, 249816, 1215117, 3269488],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                type: 'bar'
            }
        ]
    };
}

/**
 * Dati per il grafico di break-even analysis
 * @returns {object} Configurazione per Chart.js
 */
function getBreakEvenAnalysisData() {
    return {
        labels: ['0%', '20%', '40%', '60%', '80%', '100%', '120%', '140%', '160%', '180%', '200%'],
        datasets: [
            {
                label: 'Ricavi',
                data: [0, 64052, 128104, 192156, 256208, 320260, 384312, 448364, 512416, 576468, 640520],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            },
            {
                label: 'Costi Totali',
                data: [232775, 264469, 296163, 327857, 359551, 391245, 422939, 454633, 486327, 518021, 549715],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            },
            {
                label: 'Costi Fissi',
                data: [232775, 232775, 232775, 232775, 232775, 232775, 232775, 232775, 232775, 232775, 232775],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                borderDash: [5, 5]
            }
        ]
    };
}

/**
 * Dati per il grafico di analisi di sensitività
 * @returns {object} Configurazione per Chart.js
 */
function getSensitivityAnalysisData() {
    return {
        labels: ['Variazione Ricavi', 'Variazione Costi Fissi', 'Variazione Crediti', 'Variazione Debiti'],
        datasets: [
            {
                label: 'Valore Critico',
                data: [79.26, -54.82, 61, -83],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

/**
 * Dati per il grafico di indice di rischio ponderato
 * @returns {object} Configurazione per Chart.js
 */
function getRiskIndexData() {
    return {
        labels: ['Component Score', 'Leanus Score', 'Rating MCC', 'Z-Score', 'IRP Finale'],
        datasets: [
            {
                label: 'Punteggio',
                data: [29.15, 55.06, 23.60, 47.60, 38.42],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

/**
 * Dati per il grafico di confronto con il benchmark di settore
 * @returns {object} Configurazione per Chart.js
 */
function getBenchmarkComparisonData() {
    return {
        labels: ['EBITDA Margin', 'ROI', 'ROS', 'DSO', 'Leva Finanziaria', 'Ciclo Circolante'],
        datasets: [
            {
                label: 'BFLOWS S.R.L.',
                data: [-22.41, -6.87, -39.9, 343, 0.40, 87],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            },
            {
                label: 'Benchmark Settore',
                data: [17.5, 17.5, 10, 45, 0.4, 75],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            }
        ]
    };
}

/**
 * Dati per il grafico di evoluzione dell'indice di rischio
 * @returns {object} Configurazione per Chart.js
 */
function getRiskIndexTrendData() {
    // Dati simulati per trend IRP (non disponibili nel report)
    return {
        labels: ['2022', '2023', '2024', 'Proiezione 2025'],
        datasets: [
            {
                label: 'IRP',
                data: [25.8, 32.6, 38.42, 45.1],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2
            }
        ]
    };
}

/**
 * Dati per il grafico di composizione del Component Score
 * @returns {object} Configurazione per Chart.js
 */
function getComponentScoreData() {
    return {
        labels: ['PFN/EBITDA', 'EBIT/Oneri finanziari', 'Ciclo circolante', 'EBITDA/Ricavi', 'Copertura attivo fisso', 'DSCR'],
        datasets: [
            {
                label: 'Punteggio',
                data: [0, 0, 9.75, 0, 10.20, 9.20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

/**
 * Dati aziendali per la dashboard principale
 * @returns {object} Dati aziendali
 */
function getCompanyData() {
    return {
        name: "BFLOWS S.R.L.",
        sector: "Attività di programmazione informatica (ATECO 62.10.00)",
        category: "STAR (Leanus)",
        analysisDate: "09/07/2025",
        referenceDate: "12/2024",
        irp: 57.7,
        riskClass: "MEDIO",
        
        keyIndicators: {
            revenues: 320260,
            revenuesVar: 62.36,
            ebitda: -71772,
            ebitdaMargin: -22.41,
            ebit: -127613,
            ebitMargin: -39.85,
            netProfit: -48105,
            netProfitMargin: -15.02,
            equity: 1366106,
            pfn: 490169,
            pfnEbitda: "NOK",
            dpo: 256,
            dso: 343,
            dio: 0,
            workingCapitalCycle: 87,
            cashFlow: -86913,
            cashFlowMargin: -27.14,
            fixedCosts: 232775,
            fixedCostsRatio: 72.7,
            breakEvenPoint: 574102,
            breakEvenGap: -79.26,
            leanus: 4.05,
            zScore: 2.38,
            defaultProb: 3.62,
            dscr: 1.637
        },
        
        strengths: [
            "Crescita eccezionale dei ricavi (+62,36%)",
            "Patrimonio netto solido (€1.366.106)",
            "Struttura finanziaria equilibrata (D/E ratio: 0,40)",
            "Liquidità adeguata (16,70% dei ricavi)",
            "Margine di contribuzione positivo (50,27%)"
        ],
        
        weaknesses: [
            "EBITDA persistentemente negativo (-22,41%)",
            "Cash flow operativo negativo (-27,14%)",
            "Tempi di incasso anomali (343 giorni)",
            "Costi fissi eccessivi (72,7% dei ricavi)",
            "Break-even point distante (+79,26% ricavi necessari)"
        ],
        
        recommendations: [
            "Ottimizzazione struttura costi con riduzione 15-20%",
            "Implementazione aggressive collection policy per ridurre DSO a 60-90 giorni",
            "Revisione pricing e mix servizi per migliorare marginalità",
            "Implementazione sistema di controllo di gestione evoluto",
            "Valutazione di factoring pro-soluto per migliorare liquidità"
        ]
    };
}

/**
 * Dati per la tabella di analisi economica
 * @returns {object} Dati per la tabella
 */
function getEconomicAnalysisTableData() {
    return {
        headers: ["Voce", "2022", "% sui ricavi", "2023", "% sui ricavi", "2024", "% sui ricavi", "Var. % 23-24"],
        rows: [
            ["Ricavi", "€21.000", "100,0%", "€197.250", "100,0%", "€320.260", "100,0%", "+62,36%"],
            ["Acquisti e consumi", "€(8)", "0,0%", "€(209)", "-0,1%", "€(785)", "-0,2%", "+275,60%"],
            ["Valore Aggiunto su Consumi", "€21.008", "100,0%", "€197.041", "99,9%", "€319.475", "99,8%", "+62,12%"],
            ["Costi variabili di produzione", "€(96.159)", "-457,9%", "€(164.866)", "-83,6%", "€(158.472)", "-49,5%", "-3,88%"],
            ["Margine di Contribuzione", "€(75.151)", "-357,9%", "€32.175", "16,3%", "€161.003", "50,3%", "+400,40%"],
            ["Costi fissi", "€(131.866)", "-627,9%", "€(115.048)", "-58,3%", "€(232.775)", "-72,7%", "+102,27%"],
            ["EBITDA", "€(207.017)", "-985,8%", "€(82.873)", "-42,0%", "€(71.772)", "-22,4%", "-13,40%"],
            ["Ammortamenti e svalutazioni", "€(7.775)", "-37,0%", "€(10.793)", "-5,5%", "€(55.841)", "-17,4%", "+417,32%"],
            ["EBIT", "€(214.792)", "-1.022,8%", "€(93.666)", "-47,5%", "€(127.613)", "-39,9%", "+36,25%"],
            ["Saldo oneri/ricavi diversi", "€6.681", "31,8%", "€(16.039)", "-8,1%", "€76.978", "24,0%", "-579,89%"],
            ["Margine Ante Gestione Fin.", "€(208.111)", "-991,0%", "€(109.705)", "-55,6%", "€(50.635)", "-15,8%", "-53,84%"],
            ["Gestione finanziaria", "€(12.711)", "-60,5%", "€(9.603)", "-4,9%", "€(11.293)", "-3,5%", "+17,60%"],
            ["EBT (Utile ante imposte)", "€(220.822)", "-1.051,5%", "€(119.308)", "-60,5%", "€(61.928)", "-19,3%", "-48,09%"],
            ["Imposte", "€19.677", "93,7%", "€26.584", "13,5%", "€13.823", "4,3%", "-48,00%"],
            ["Utile Netto", "€(201.145)", "-957,8%", "€(92.724)", "-47,0%", "€(48.105)", "-15,0%", "-48,13%"]
        ]
    };
}

/**
 * Dati per la tabella di analisi patrimoniale
 * @returns {object} Dati per la tabella
 */
function getBalanceSheetTableData() {
    return {
        headers: ["IMPIEGHI", "12/2022", "%", "12/2023", "%", "12/2024", "%", "Δ 2023-2024"],
        rows: [
            ["Liquidità", "16.726", "1,5%", "154.937", "8,0%", "53.476", "2,5%", "-65,5%"],
            ["Crediti Clienti", "4.880", "0,4%", "170.800", "8,8%", "304.300", "14,0%", "+78,2%"],
            ["Rimanenze", "0", "0,0%", "0", "0,0%", "0", "0,0%", "0,0%"],
            ["Altri Crediti", "306.798", "27,3%", "452.858", "23,3%", "338.991", "15,5%", "-25,1%"],
            ["Totale Attivo Circolante", "328.404", "29,2%", "778.595", "40,0%", "696.767", "31,9%", "-10,5%"],
            ["Immobilizzazioni Nette", "794.639", "70,8%", "1.167.302", "60,0%", "1.484.241", "68,1%", "+27,2%"],
            ["TOTALE IMPIEGHI", "1.123.043", "100,0%", "1.945.897", "100,0%", "2.181.008", "100,0%", "+12,1%"]
        ],
        headers2: ["FONTI", "12/2022", "%", "12/2023", "%", "12/2024", "%", "Δ 2023-2024"],
        rows2: [
            ["Debiti Fornitori", "105.423", "9,4%", "202.215", "10,4%", "163.063", "7,5%", "-19,4%"],
            ["Altri Debiti", "95.996", "8,5%", "144.058", "7,4%", "108.194", "5,0%", "-24,9%"],
            ["Passività Correnti", "201.419", "17,9%", "346.273", "17,8%", "271.257", "12,4%", "-21,7%"],
            ["Fondi", "0", "0,0%", "0", "0,0%", "0", "0,0%", "0,0%"],
            ["Debiti Finanziari", "677.682", "60,3%", "646.914", "33,2%", "543.645", "24,9%", "-16,0%"],
            ["di cui a M/L termine", "677.682", "60,3%", "646.634", "33,2%", "507.872", "23,3%", "-21,5%"],
            ["di cui a Breve termine", "0", "0,0%", "280", "0,0%", "35.773", "1,6%", "+12.676%"],
            ["Patrimonio Netto", "243.942", "21,7%", "952.710", "49,0%", "1.366.106", "62,6%", "+43,4%"],
            ["TOTALE FONTI", "1.123.043", "100,0%", "1.945.897", "100,0%", "2.181.008", "100,0%", "+12,1%"]
        ]
    };
}

/**
 * Dati per la tabella di analisi degli indici
 * @returns {object} Dati per la tabella
 */
function getIndicesTableData() {
    return {
        headers: ["Indice", "2022", "2023", "2024", "Benchmark di Settore", "Valutazione"],
        rows: [
            ["ROI (EBIT/Cap. Investito)", "-23,74%", "-6,48%", "-6,87%", "15-20%", "Critico"],
            ["ROE (Utile/Patrimonio Netto)", "-82,46%", "-9,73%", "-3,52%", "12-18%", "Critico"],
            ["ROS (EBIT/Ricavi)", "-1.022,8%", "-47,5%", "-39,9%", "8-12%", "Critico"],
            ["EBITDA Margin", "-985,8%", "-42,0%", "-22,4%", "15-20%", "Critico"],
            ["Margine di Contribuzione %", "-357,9%", "16,3%", "50,3%", "45,0%", "Buono"],
            ["Asset Turnover (Ricavi/CIN)", "N/D", "N/D", "0,17", "0,8-1,2", "Critico"],
            ["Cash Flow Operativo/Ricavi", "N/D", "N/D", "-27,14%", "10-15%", "Critico"],
            ["Copertura Immobilizzazioni", "0,31", "0,82", "0,92", "> 0,7", "Adeguato"],
            ["Indice di Struttura Secondario", "1,16", "1,37", "1,27", "> 1", "Buono"],
            ["Leva Finanziaria (D/E)", "2,78", "0,68", "0,40", "< 1", "Ottimo"],
            ["Autonomia Finanziaria", "0,22", "0,49", "0,63", "> 0,3", "Ottimo"],
            ["PFN/EBITDA", "NOK", "NOK", "NOK", "< 3", "Critico"],
            ["PFN/PN", "2,71", "0,52", "0,36", "< 1", "Ottimo"],
            ["Giorni Crediti Clienti (DSO)", "84", "312", "343", "30-60", "Critico"],
            ["Giorni Debiti Fornitori (DPO)", "369", "324", "256", "30-60", "Elevato"],
            ["Ciclo del Circolante (gg)", "-285", "-12", "87", "30-45", "Attenzione"]
        ]
    };
}

/**
 * Dati per la tabella di analisi dei flussi di cassa
 * @returns {object} Dati per la tabella
 */
function getCashFlowTableData() {
    return {
        headers: ["Componente", "2024", "% sui Ricavi", "Considerazioni"],
        rows: [
            ["EBITDA", "-€71.772", "-22,41%", "Marginalità operativa negativa"],
            ["(-) Imposte", "€13.823", "4,32%", "Credito fiscale generato dalle perdite"],
            ["(+/-) Variazione Capitale Circolante", "-€164.916", "-51,52%", "Significativo assorbimento di liquidità"],
            ["(=) Cash Flow Operativo", "-€86.913", "-27,14%", "Generazione di cassa operativa negativa"],
            ["(-) Investimenti", "-€372.780", "-116,41%", "Investimenti significativi in immobilizzazioni"],
            ["(=) Free Cash Flow", "-€459.693", "-143,55%", "FCF fortemente negativo"],
            ["(+/-) Operazioni finanziarie", "€358.232", "111,86%", "Incremento patrimonio netto e riduzione debiti"],
            ["(=) Variazione Netta di Cassa", "-€101.461", "-31,68%", "Riduzione significativa della liquidità"]
        ],
        headers2: ["Componente", "2022", "2023", "2024", "CAGR 2022-2024", "Trend"],
        rows2: [
            ["Cash Flow Capitale Circolante", "-€92.827", "-€151.059", "-€164.916", "+33,4%", "↓"],
            ["Cash Flow Operativo", "-€122.901", "-€249.057", "-€86.913", "-16,9%", "↓ ↑"],
            ["Cash Flow Investimenti", "-€267.678", "-€383.456", "-€372.780", "+18,1%", "↓ ↑"],
            ["Variazione Debiti Finanziari", "€80.437", "-€30.768", "-€103.269", "-", "↓"],
            ["Variazione Patrimonio Netto", "€0", "€801.492", "€461.501", "-", "↑"],
            ["Variazione Netta di Cassa", "-€310.142", "€138.211", "-€101.461", "-", "↓"]
        ]
    };
}

/**
 * Dati per la tabella di analisi dei rischi
 * @returns {object} Dati per la tabella
 */
function getRiskAnalysisTableData() {
    return {
        headers: ["Categoria", "Livello di rischio", "Giustificazione"],
        rows: [
            ["Rischio operativo", "ALTO", "EBITDA ed EBIT negativi, incapacità di generare marginalità"],
            ["Rischio finanziario", "MEDIO", "Buona liquidità ma cash flow operativo negativo"],
            ["Rischio patrimoniale", "BASSO", "Patrimonio netto solido e leva finanziaria contenuta"],
            ["Rischio di credito", "ALTO", "Tempi di incasso eccessivi (343 giorni)"],
            ["Rischio di liquidità", "MEDIO", "Liquidità attuale buona ma trend negativo"],
            ["Rischio di crescita", "ALTO", "Crescita elevata ma non sostenibile operativamente"],
            ["Rischio strategico", "MEDIO", "Settore IT in crescita ma business model da validare"]
        ],
        headers2: ["Indicatore", "Valore 12/2024", "Trend", "Interpretazione"],
        rows2: [
            ["Variazione Ricavi", "+62,36%", "In forte crescita", "Espansione significativa del business"],
            ["EBITDA Margin", "-22,41%", "Negativo", "Redditività operativa critica"],
            ["EBIT Margin", "-39,85%", "Negativo", "Perdita operativa strutturale"],
            ["PFN/EBITDA", "NOK", "N/A", "EBITDA negativo rende l'indice non calcolabile"],
            ["Leva Finanziaria (D/E)", "0,40", "Ottima", "Struttura finanziaria equilibrata"],
            ["Liquidità/Ricavi", "16,70%", "Ottima", "Buona disponibilità liquida"],
            ["Cash Flow Operativo/Ricavi", "-27,14%", "Insufficiente", "Incapacità di generare cassa operativa"],
            ["Giorni Crediti Clienti", "343", "Da monitorare", "Tempi di incasso eccessivamente lunghi"],
            ["Ciclo del Circolante", "87 giorni", "Positivo", "Ciclo monetario relativamente breve"]
        ]
    };
}

/**
 * Dati per la tabella di analisi della bancabilità
 * @returns {object} Dati per la tabella
 */
function getBankabilityTableData() {
    return {
        headers: ["Indicatore", "Valore 12/2024", "Valore 12/2023", "Valore 12/2022", "Interpretazione"],
        rows: [
            ["PFN/EBITDA", "NOK", "NOK", "NOK", "Non calcolabile (EBITDA negativo)"],
            ["Leva Finanziaria (D/E)", "0,40", "0,68", "2,78", "Ottima (<0,5)"],
            ["EBITDA/Oneri Finanziari", "-6,35", "-8,63", "-16,29", "Critico (EBITDA negativo)"],
            ["DSCR", "1,637", "n.d.", "n.d.", "Buono (>1,2)"],
            ["Cash Flow Operativo/Debiti Finanziari", "-15,99%", "-38,50%", "-18,14%", "Critico (cash flow negativo)"]
        ],
        headers2: ["Parametro", "Valore", "Interpretazione"],
        rows2: [
            ["Break-Even Point EBIT", "€574.102", "Fatturato necessario per pareggio operativo"],
            ["Fatturato attuale", "€320.260", "Fatturato dell'esercizio 2024"],
            ["Margine di sicurezza", "-79,26%", "Distanza negativa dal break-even"],
            ["Margine di contribuzione", "50,27%", "Buona marginalità sui costi variabili"],
            ["Costi fissi", "€232.775", "72,7% del fatturato attuale"],
            ["Moltiplicatore costi fissi", "1,99", "Impatto incremento costi fissi sui ricavi"],
            ["Capacità di indebitamento incrementale", "€399.000", "Stima Leanus"],
            ["Fido consigliato a breve termine", "€32.000", "Stima Leanus"]
        ]
    };
}

/**
 * Dati per la tabella di raccomandazioni
 * @returns {object} Dati per la tabella
 */
function getRecommendationsTableData() {
    return {
        headers: ["Area", "Situazione Attuale", "Azione Suggerita", "Effetti Previsti", "Impatto Quantitativo/Costo"],
        rows: [
            ["Gestione Crediti", "DSO: 343 giorni", "Implementare factoring pro-soluto e politiche di incasso aggressive", "Riduzione DSO a 120 giorni", "Liberazione di circa €200.000 di liquidità"],
            ["Struttura Costi", "Costi fissi: 72,7% ricavi", "Revisione costi fissi e variabilizzazione parziale", "Riduzione break-even point", "Risparmio di €50.000-€80.000"],
            ["Marginalità", "EBITDA: -22,41%", "Revisione pricing e ottimizzazione mix servizi", "EBITDA positivo 5-8%", "Incremento marginalità di €80.000-€100.000"],
            ["Cash Flow", "CF operativo: -27,14%", "Ottimizzazione capitale circolante e gestione tesoreria", "CF positivo", "Miglioramento di €150.000-€200.000"],
            ["Diversificazione", "Concentrazione settore IT", "Sviluppo servizi ad alto valore aggiunto", "Nuovi flussi di ricavi", "Incremento fatturato 15-20%"],
            ["Controllo Gestione", "Monitoraggio base", "Implementazione dashboard KPI e controllo analitico", "Efficienza operativa", "Investimento €20.000-€30.000, ROI 18-24 mesi"],
            ["Pianificazione", "Gestione reattiva", "Business plan dettagliato e budget rolling", "Prevedibilità performance", "Consulenza €15.000-€25.000"]
        ]
    };
}

/**
 * Dati per la tabella di analisi del capitale circolante
 * @returns {object} Dati per la tabella
 */
function getWorkingCapitalTableData() {
    return {
        headers: ["Componente", "2022", "2023", "2024", "Variazione 2023-2024", "Benchmark settoriale"],
        rows: [
            ["Giorni Crediti Clienti (DSO)", "84", "312", "343", "+31 giorni (+9,9%)", "30-60 giorni"],
            ["Giorni Magazzino (DIO)", "0", "0", "0", "0 giorni", "0-10 giorni"],
            ["Giorni Debiti Fornitori (DPO)", "369", "324", "256", "-68 giorni (-21,0%)", "30-60 giorni"],
            ["Ciclo del Circolante", "-285 giorni", "-12 giorni", "87 giorni", "+99 giorni", "30-45 giorni"]
        ],
        headers2: ["Area", "Situazione attuale", "Azione suggerita", "Impatto atteso", "Valore stimato"],
        rows2: [
            ["Gestione crediti commerciali", "DSO = 343 giorni (critico)", "Implementazione aggressive collection policy, valutazione cessione crediti pro-soluto", "Riduzione DSO a 60 giorni (-283 giorni)", "Liberazione liquidità per €251.587"],
            ["Revisione condizioni contrattuali", "Termini di pagamento inadeguati", "Rinegoziazione contratti con pagamenti anticipati o milestone payments", "Riduzione DSO a 45 giorni (ulteriori -15 giorni)", "Liberazione liquidità aggiuntiva per €13.335"],
            ["Ottimizzazione pagamenti fornitori", "DPO = 256 giorni (eccessivo)", "Normalizzazione graduale dei pagamenti mantenendo DPO a 60 giorni", "Riduzione DPO a 60 giorni (+196 giorni di cash flow negativo)", "Esborso di €86.240"],
            ["Capitale Circolante Netto", "Ciclo = 87 giorni", "Combinazione delle azioni precedenti", "Riduzione a 45 giorni (-42 giorni)", "Liberazione liquidità netta per €178.682"]
        ]
    };
}

/**
 * Dati per la tabella di analisi dell'IRP
 * @returns {object} Dati per la tabella
 */
function getIRPAnalysisTableData() {
    return {
        headers: ["Componente", "Punteggio", "Peso", "Contributo"],
        rows: [
            ["Component Score", "29,15", "30%", "8,75"],
            ["Leanus Score Normalizzato", "55,06", "30%", "16,52"],
            ["Rating MCC", "23,60", "25%", "5,90"],
            ["Z-Score di Altman", "47,60", "15%", "7,14"],
            ["IRP FINALE", "", "", "38,31"]
        ],
        headers2: ["Indicatore", "Valore", "Peso", "Punteggio", "Punteggio Ponderato"],
        rows2: [
            ["I₁ (PFN/EBITDA)", "NOK", "25%", "0", "0,00"],
            ["I₂ (EBIT/Oneri finanziari)", "-11,29", "20%", "0", "0,00"],
            ["I₃ (Ciclo circolante)", "87 gg", "15%", "65", "9,75"],
            ["I₄ (EBITDA/Ricavi)", "-22,41%", "15%", "0", "0,00"],
            ["I₅ (Copertura attivo fisso)", "0,92", "15%", "68", "10,20"],
            ["I₆ (DSCR)", "1,637", "10%", "92", "9,20"],
            ["TOTALE", "", "100%", "", "29,15"]
        ]
    };
}

/**
 * Dati per la tabella di analisi di sensitività
 * @returns {object} Dati per la tabella
 */
function getSensitivityTableData() {
    return {
        headers: ["Stress Test", "Superato", "Valore critico", "Valore attuale", "Margine di sicurezza"],
        rows: [
            ["Variazione Ricavi", "✓", "+79,26%", "+62,36%", "Crescita ulteriore necessaria"],
            ["Variazione Costi Fissi", "✓", "-54,82%", "Livello attuale", "Rigidità elevata"],
            ["Variazione Crediti", "✗", "+61 gg", "343 gg", "Livello già critico"],
            ["Variazione Rimanenze", "N/A", "N/A", "0 gg", "Non applicabile"],
            ["Variazione Debiti", "✓", "-83 gg", "256 gg", "Margine limitato"]
        ],
        headers2: ["Scenario", "Presupposti", "Capacità Incrementale"],
        rows2: [
            ["Conservativo", "EBITDA = 3% sui ricavi", "€200.000"],
            ["Realista", "EBITDA = 6% sui ricavi", "€500.000"],
            ["Ottimista", "EBITDA = 9% sui ricavi", "€800.000"]
        ]
    };
}

/**
 * Dati per la tabella di ottimizzazione contabile
 * @returns {object} Dati per la tabella
 */
function getAccountingOptimizationTableData() {
    return {
        headers: ["Area", "Situazione Attuale", "Azione Suggerita", "Effetti Previsti", "Impatto Quantitativo/Costo"],
        rows: [
            ["Redditività Operativa", "EBITDA negativo: -€71.772 (-22,41% sui ricavi)", "Implementare programma strutturato di cost management e pricing optimization", "Raggiungimento break-even EBITDA", "Target: +€100.000 miglioramento EBITDA<br>Investimento: €50.000 consulenza"],
            ["Gestione del Capitale Circolante", "Ciclo del circolante: 87 giorni (DSO: 343 gg)", "Task force per ottimizzazione ciclo crediti-debiti", "Riduzione fabbisogno finanziario del 15-20%", "Liberazione liquidità: €100.000-150.000<br>Costo: €20.000"],
            ["Struttura Costi", "Costi fissi: €232.775 (72,7% dei ricavi)", "Revisione critica della struttura dei costi con approccio zero-based", "Riduzione costi fissi del 10-15%", "Risparmio: €25.000-35.000/anno<br>Costo implementazione: €15.000"],
            ["Crescita Ricavi", "Crescita +62,36% ma marginalità negativa", "Focalizzazione su clienti ad alta marginalità e servizi ricorrenti", "Miglioramento qualità dei ricavi", "Incremento marginalità: +5-10 pp<br>Investimento commerciale: €30.000"],
            ["Liquidità", "Liquidità: €53.476 (16,70% sui ricavi)", "Implementazione cash flow forecasting e ottimizzazione tesoreria", "Miglioramento gestione liquidità", "Efficienza: +€10.000-20.000/anno<br>Costo: €10.000"],
            ["Compliance e Controllo", "2/6 indicatori CCII in linea", "Implementazione sistema di monitoraggio KPI e early warning", "Prevenzione deterioramento e compliance normativa", "Beneficio: mitigazione rischi<br>Costo: €25.000"]
        ],
        headers2: ["Indicatore", "Pre-ottimizzazione", "Post-ottimizzazione", "Variazione"],
        rows2: [
            ["EBITDA", "-€71.772", "-€41.772 - -€16.772", "+€30.000-€55.000"],
            ["EBIT", "-€127.613", "-€77.613 - -€37.613", "+€50.000-€90.000"],
            ["Utile netto", "-€48.105", "-€18.105 - €6.895", "+€30.000-€55.000"],
            ["Copertura immob.", "0,92", "0,95 - 0,97", "+3,3%-5,4%"],
            ["Leanus Score", "4,05", "4,50 - 5,20", "+11,1%-28,4%"],
            ["IRP", "38,42", "42,00 - 48,00", "+9,3%-25,0%"]
        ]
    };
}

/**
 * Dati per la tabella di analisi SWOT
 * @returns {object} Dati per la tabella
 */
function getSWOTAnalysisTableData() {
    return {
        strengths: [
            "Crescita eccezionale dei ricavi: +62,36% nel 2024",
            "Settore in espansione: Opera nel settore IT in forte crescita",
            "Solidità patrimoniale: Patrimonio netto di €1.366.106 in crescita del 43,39%",
            "Basso livello di indebitamento: D/E ratio di 0,40, considerato ottimo",
            "Elevata liquidità relativa: 16,70% dei ricavi in liquidità",
            "Miglioramento progressivo: Trend positivo dell'EBITDA (da -€207.017 a -€71.772)",
            "Azionariato diversificato: 90 soci con management distribuito"
        ],
        weaknesses: [
            "Perdite operative strutturali: EBITDA negativo di €71.772 (-22,41% sui ricavi)",
            "Marginalità critica: ROS del -39,85%, indicando grave inefficienza operativa",
            "Tempi di incasso eccessivi: DSO di 343 giorni, critico per la gestione finanziaria",
            "Cash flow operativo negativo: -€86.913 (-27,14% sui ricavi)",
            "Elevati costi fissi: €232.775 (72,7% dei ricavi), indicando rigidità operativa",
            "Deterioramento liquidità: Riduzione del 65,49% della liquidità disponibile",
            "Elevato Indice di Rischio Ponderato: 38,42/100 (rischio alto)"
        ],
        opportunities: [
            "Mercato IT in espansione: Crescente domanda di servizi di programmazione",
            "Digitalizzazione aziendale: Accelerazione post-pandemia della trasformazione digitale",
            "Capacità di indebitamento: €399.000 di capacità incrementale disponibile",
            "Diversificazione servizi: Possibilità di espandere la gamma di servizi offerti",
            "Internazionalizzazione: Opportunità di espansione in mercati esteri",
            "Partnership strategiche: Potenziali alleanze con system integrator"
        ],
        threats: [
            "Concorrenza agguerrita: Mercato IT altamente competitivo",
            "Tempi di pagamento dilazionati: Rischio di ulteriore peggioramento del DSO",
            "Dipendenza da clienti: Possibile concentrazione del fatturato su pochi clienti",
            "Volatilità tecnologica: Necessità di investimenti continui in aggiornamento",
            "Pressione sui prezzi: Competizione sui costi nei servizi IT",
            "Rischio di credito: Elevato DSO espone a rischi di insolvenza clienti"
        ]
    };
}
function initChart(canvasId, chartType, chartData, chartOptions) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        // console.warn(`Canvas non trovato per il grafico: ${canvasId}`);
        return; // Esce silenziosamente se il canvas non esiste (la pagina potrebbe non averlo)
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error(`Impossibile ottenere il contesto 2D per il canvas: ${canvasId}`);
        return;
    }

    // Validazione dati più robusta
    if (!chartData || typeof chartData !== 'object' || !Array.isArray(chartData.labels) || !Array.isArray(chartData.datasets)) {
         console.error(`Dati non validi o mancanti forniti a initChart per: ${canvasId}. Dati ricevuti:`, chartData);
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ctx.font = '14px Titillium Web, sans-serif';
         ctx.fillStyle = '#dc3545'; // Colore danger
         ctx.textAlign = 'center';
         ctx.fillText('Errore: Dati grafico non validi.', canvas.width / 2, canvas.height / 2);
        return;
    }

    try {
        // Distruggi grafico esistente se presente
        const existingChart = Chart.getChart(canvasId);
        if (existingChart instanceof Chart) {
            existingChart.destroy();
        }
        // Crea il nuovo grafico
        new Chart(ctx, { // Usa ctx invece di canvas per maggiore compatibilità
            type: chartType,
            data: chartData,
            options: chartOptions
        });
        // console.log(`Grafico ${canvasId} (${chartType}) inizializzato.`); // Log meno invadente
    } catch (error) {
        console.error(`Errore durante l'inizializzazione del grafico ${canvasId}:`, error);
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ctx.font = '14px Titillium Web, sans-serif';
         ctx.fillStyle = '#dc3545';
         ctx.textAlign = 'center';
         ctx.fillText(`Errore inizializzazione grafico.`, canvas.width / 2, canvas.height / 2);
    }
}