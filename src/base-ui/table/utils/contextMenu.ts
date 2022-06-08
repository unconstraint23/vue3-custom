
const cssText = 'position:fixed;pointer-events:none;z-index:-9999;opacity:0;';

function getParent(el:HTMLElement, classNameOrTag:string): HTMLElement {
  if (
    el.classList.contains(classNameOrTag) ||
    el.tagName === classNameOrTag.toUpperCase()
  ) {
    return el;
  } else {
    return getParent(el.parentElement!, classNameOrTag);
  }
}
/*获取行数据*/
function getRowData(row: any) {
  let td = row.firstElementChild;
  const values = [];
  while (td) {
    /*普通列*/
    if (!td.classList.contains('no-copy')) {
      values.push(td.innerText);
    }
    td = td.nextElementSibling;
  }
  return values.join('\t');
}
function getColIndex(el:any) {
  const td = getParent(el, 'td');
  console.dir(td)
  const colIndex = td.classList[0].split('_').pop();
  const firstIndex = td.parentElement!.firstElementChild!.classList[0]
    .split('_')
    .pop();
  return parseInt(colIndex!) - parseInt(firstIndex!);
}
/*获取列数据*/
function getColData(el:any) {
  const colIndex = getColIndex(el);
  let row = getParent(el, 'tbody').firstElementChild;
  const values = [];
  while (row) {

    values.push(row.children[colIndex].firstElementChild?.innerHTML.replace(/<!--(.|[\r\n])*?-->/,""));
    row = row.nextElementSibling;
  }
  return values.join('\n');
}
/*复制表格*/
function getTableData(el:any) {
  const tbody = getParent(el, 'tbody');
  let row = tbody.firstElementChild;
  const values = [];
  while (row) {
    values.push(getRowData(row));
    row = row.nextElementSibling;
  }
  return values.join('\n');
}
export function showContextMenu(row:any, column:any, event:any, proxy: any) {

  if (column.type !== 'default' || column.label === '操作') return false;
  event.preventDefault()
  const rowEl = getParent(event.target,'el-table__row')
  const checkboxEl = rowEl.firstElementChild?.querySelector('.el-checkbox');

  const config = {
    menuList: [
      {
        label: '复制',
        onClick:() => {
          setClipboard(event.target.innerText);
        }
      },
      {
        label: '复制整行',
        onClick: () => {
          setClipboard(getRowData(rowEl));
        }
      },
      {
        label: '复制整列',
        onClick: () => {
          setClipboard(getColData(event.target));
        }
      },
      {
        label: '复制表格',
        onClick: () => {
          setClipboard(getTableData(event.target));
        }
      }
    ],
    event,
    x: event.clientX,
    y: event.clientY,
    // customClass: 'class-a',
    zIndex: 3000,


  };
  if (checkboxEl) {
    config.menuList.push({
      label: '复制勾选数据',
      onClick: () => {
        return setClipboard(getCheckedData(event.target));
      }
    });
  }
  proxy.$contextMenu.show(config)
  return false
}
/*复制勾选数据*/
function getCheckedData(el:any) {
  const tbody = getParent(el, 'tbody');
  let row = tbody.firstElementChild;
  const values = [];
  while (row) {
    if (row.firstElementChild!.querySelector('.el-checkbox.is-checked')) {
      values.push(getRowData(row));
    }
    row = row.nextElementSibling;
  }
  return values.join('\n');
}
export function setClipboard(value:any) {
  if(!value || !value.length) {
      return "您为勾选任何内容"
  }
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.cssText = cssText;
  document.body.appendChild(textarea);
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    // textarea.contentEditable = true;
    textarea.readOnly = true;
    const range = document.createRange();
    range.selectNodeContents(textarea);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    textarea.setSelectionRange(0, 999999);
  } else {
    textarea.select();
  }
  try {
    document.execCommand('copy');
  } catch (err) {
    console.warn(err);
  }
  document.body.removeChild(textarea);
}
