const loadingElement = document.createElement('div')
loadingElement.style = "width:100%;height:100%;position:absolute;left:0;top:0;z-index:101;display:flex;justify-content:center;align-items:center;background:rgba(255,255,255,0.95);"
loadingElement.innerHTML = 'Loading...'

const createInstance = function (el, binding) {
  el.style.position = 'relative'
  el.appendChild(loadingElement)
}

const removeInstance = function (el, binding) {
  el.removeChild(loadingElement)
}

const vLoading = {
  mounted(el, binding) {
    if (!!binding.value) {
      createInstance(el, binding)
    }
  },
  updated(el, binding) {
    if (binding.oldValue !== binding.value) {
      if (binding.value) {
        createInstance(el, binding)
      } else {
        removeInstance(el, binding)
      }
    }
  },
  unmounted(el) {
    removeInstance(el, binding)
  }
}

export default vLoading