function saveProfile() {
    const firstName = document.getElementById("namaDepan").value;
    const lastName = document.getElementById("namaBelakang").value;
    const about = document.getElementById("about").value;
    const url = document.getElementById("url").value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("about", about);
    localStorage.setItem("url", url);

    alert("Profil berhasil diperbarui!");
    window.location.href = "profile.html";
  }

  function resetProfile() {
    if (confirm("Apakah Anda yakin ingin mereset profil ke default?")) {
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("about");
      localStorage.removeItem("profileImage");
      location.reload(); // Muat ulang halaman
    }
  }

  document
    .getElementById("uploadImage")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("profileImage").src = e.target.result;
          localStorage.setItem("profileImage", e.target.result);
        };
        reader.readAsDataURL(file);
      }
    });