function contactForm() {
    return {
        gender: '',
        firstName: '',
        lastName: '',
        street: '',
        zipAndCity: '',
        country: '',
        phone: '',
        email: '',
        motoPassNumber: '',
        bmwModel: '',
        miniModel: '',
        message: '',
        dataProtection: false,

        mailtoLink: '#',
        triedSubmit: false,

        submit: function () {
          this.triedSubmit = true

          if (this.$refs.contactForm.checkValidity()) {
            // If form is valid, act as a link and open email client with collected data
            window.location.href = this.mailtoLink
          }
        },

        buildLink() {
            // Build email message with collected data
            const body = `${this.firstName} ${this.lastName}, hat das Formular mit folgenden Daten ausgefüllt.
            Personal Data:
            Gender: ${this.gender}
            First Name: ${this.firstName}
            Last Name: ${this.lastName}
            MotoGP Pass No.: ${this.motoPassNumber}
            Street Address: ${this.street}
            Zip Code / City: ${this.zipAndCity}
            Country: ${this.country}
            Phone: ${this.phone}
            E-Mail: ${this.email}
            Interest:
            BMW Model: ${this.bmwModel}
            MINI Model: ${this.miniModel}
            Message: ${this.message}
            DataProtection: ${this.dataProtection ? 'accepted' : 'not accepted'}`

            this.mailtoLink = `mailto:wjertzochjennifer@gmail.com?subject=${encodeURI('Kontakt von Webseite')}&body=${encodeURI(body)}`
        }
    }
}