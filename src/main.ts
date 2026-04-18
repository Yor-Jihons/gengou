import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="flexbox1">
  <select>
    <option value="1989">1989年</option>
    <option value="1990">1990年</option>
  </select>
  <select>
    <option value="1">1月</option>
    <option value="2">2月</option>
    <option value="3">3月</option>
    <option value="4">4月</option>
    <option value="5">5月</option>
    <option value="6">6月</option>
    <option value="7">7月</option>
    <option value="8">8月</option>
    <option value="9">9月</option>
    <option value="10">10月</option>
    <option value="11">11月</option>
    <option value="12">12月</option>
  </select>
  <select>
    <option value="1">1日</option>
    <option value="2">2日</option>
    <option value="3">3日</option>
    <option value="4">4日</option>
    <option value="5">5日</option>
    <option value="6">6日</option>
    <option value="7">7日</option>
    <option value="8">8日</option>
    <option value="9">9日</option>
    <option value="10">10日</option>
    <option value="11">11日</option>
    <option value="12">12日</option>
    <option value="13">13日</option>
    <option value="14">14日</option>
    <option value="15">15日</option>
    <option value="16">16日</option>
    <option value="17">17日</option>
    <option value="18">18日</option>
    <option value="19">19日</option>
    <option value="20">20日</option>
  </select>
</div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
