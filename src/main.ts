import './style.css'


const minYear: number = 1912;
const maxCountYears: number = 601;

function CreateYearsOptionsTexts(){
  let text = "";

  const selectedYear = (new Date()).getFullYear();

  for( let i = 0; i < maxCountYears; i++ ){
    const y = i + minYear;
    text += '<option value="' + y  + '"' + (y === selectedYear ? "selected" : '') + ' >' +  y + "年</option>";
  }
  return text;
}

function convertToGengo( year: number ){
    // 1月1日時点のDateオブジェクトを作成
    const d = new Date(year, 0, 1);

    // 和暦（japaneseカレンダー）を指定してフォーマット
    const formatter = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
        era: 'long',
        year: 'numeric'
    });

    return formatter.format(d); // 例: "令和6年"
}

function select_onchange(){
  const yearSelect = document.getElementById("yearSelect") as HTMLSelectElement;

  const y = Number( yearSelect.value );

  const resultArea = document.getElementById("result_area");
  if( resultArea === undefined || resultArea === null ) return;
  resultArea.innerHTML = convertToGengo( y );
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="flexbox1">
  <select id="yearSelect">
    ${CreateYearsOptionsTexts()}
  </select>
</div>
<div id="result_area"></div>
`;

document.getElementById("yearSelect")?.addEventListener( "change", select_onchange );
select_onchange();
