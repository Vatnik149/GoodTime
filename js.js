let list = ['Заика Дмитрий Владимирович( html, bootsrap, css)','Прокудин Антон Михалыч( js , bootsrap, react)','Лукьянец Юрий( c# , angular, bootsrap)','Вершинин Максим','Архипов Кирилл']
const result = document.getElementById('results')
renderList(list,result)
function filter(val,list){
let result;
  list.forEach(i=>{
    if(i.indexOf(val)!=-1)
      result.push(i)
  })
return result;
}
function filter(val,list){
console.time('test')
  return list.filter(i=>(~i.indexOf(val)))
};
function renderList(_list=[],el=document.body){
	el.innerHTML='';
  _list.forEach(i=>{
    let new_el = document.createElement('li')
    new_el.innerHTML=i
    el.appendChild(new_el)
  })
  console.timeEnd('test')
}
document.getElementById('search').addEventListener('input',e=>renderList(filter(e.target.value,list),result))