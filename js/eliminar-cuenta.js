const form = document.querySelector("[data-delete-form]");
const done = document.querySelector("[data-delete-done]");

if (form && done) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const body = new URLSearchParams(new FormData(form)).toString();
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error("No se pudo enviar");
      form.hidden = true;
      done.hidden = false;
      done.focus();
    } catch (_error) {
      form.submit();
    }
  });
}
