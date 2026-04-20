import './style.css'

const minYear: number = 1868;
const maxYear: number = (new Date()).getFullYear() + 10;

function createYearOptions() {
  let options = "";
  const currentYear = (new Date()).getFullYear();

  for (let y = maxYear; y >= minYear; y--) {
    options += `<option value="${y}" ${y === currentYear ? "selected" : ""}>${y}年</option>`;
  }
  return options;
}

function convertToGengo(year: number) {
  // 1月1日時点のDateオブジェクトを作成
  // 明治以降の元号の変わり目（7月30日など）を考慮する場合は、
  // 特定の日付（例: 12月31日）で判定するのが安全ですが、
  // ここではシンプルにその年の代表的な元号を返します。
  const d = new Date(year, 11, 31); // その年の年末で判定

  const formatter = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
    era: 'long',
    year: 'numeric'
  });

  return formatter.format(d);
}

function updateResult() {
  const yearSelect = document.getElementById("yearSelect") as HTMLSelectElement;
  const resultArea = document.getElementById("resultArea");
  
  if (!yearSelect || !resultArea) return;

  const year = Number(yearSelect.value);
  resultArea.innerText = convertToGengo(year);
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="center">
    <h1>年号変換</h1>
    <div class="converter-card">
      <div class="input-group">
        <label for="yearSelect">西暦を選択:</label>
        <select id="yearSelect" class="counter">
          ${createYearOptions()}
        </select>
      </div>
      <div class="result-display">
        <p>和暦</p>
        <div id="resultArea" class="gengo-result"></div>
      </div>
    </div>
  </div>
`;

document.getElementById("yearSelect")?.addEventListener("change", updateResult);
updateResult();
