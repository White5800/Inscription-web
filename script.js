// script.js
const africanCountries = [
  "Algérie", "Angola", "Bénin", "Botswana", "RDC🇨🇩", 
  // ... (Ajoutez les 26 autres pays africains)
];

const countrySelect = document.getElementById("country");
africanCountries.forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.text = country;
  countrySelect.add(option);
});

async function register() {
  const form = document.getElementById("registrationForm");
  const formData = new FormData(form);

  if (formData.get("password") !== formData.get("confirmPassword")) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  try {
    const response = await fetch('/register', { 
      method: 'POST',
      body: formData 
    });

    if (response.ok) {
      alert("Inscription réussie !");
      form.reset(); // Réinitialiser le formulaire après l'envoi
    } else {
      alert("Erreur lors de l'inscription.");
    }
  } catch (error) {
    console.error('Erreur :', error);
    alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
  }
}

