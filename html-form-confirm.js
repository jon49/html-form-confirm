document.addEventListener("hf:before", e => {
    let { submitter, form } = e.detail
    let { attr } = window.htmf
    let message = [submitter, form].map(x => attr(x, "hf-confirm")).find(x => x)
    if (message) {
        return window.confirm(message)
    }
})
