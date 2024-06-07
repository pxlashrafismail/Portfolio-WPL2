<template>
    <div class="contact-container">
        <div class="contact-container-info">
            <table class="contact-container-info-tabel">
                <tr>
                    <td>
                        <i class="fa-solid fa-user"></i>
                        Name:
                    </td>
                    <td>Ismail Ashraf</td>
                </tr>
                <tr>
                    <td>
                        <i class="fa-solid fa-phone"></i>
                        Phone:
                    </td>
                    <td>+32465280009</td>
                </tr>
                <tr>
                    <td>
                        <i class="fa-solid fa-envelope"></i>
                        Email:
                    </td>
                    <td>ashraf.ismail@student.pxl.be</td>
                </tr>
            </table>
        </div>
        <div class="contact-container-iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.61445292983!2d5.393349676585684!3d50.9308486716879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c120f842a0e029%3A0xaf1fdcd9009db773!2sCampuslaan%2C%203590%20Diepenbeek!5e0!3m2!1snl!2sbe!4v1717645039017!5m2!1snl!2sbe"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="contact-container-netlify">
            <a class="contact-container-netlify-link" 
            :href="netlifyLink">
            {{ netlify }}
            </a>
        </div >
        <div class="contact-container-github">
            <a class="contact-container-github-link" 
            :href="githubLink">
                {{ github }}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                netlify: 'NETLIFY',
                netlifyLink: 'https://coruscating-marshmallow-7e8a2c.netlify.app',
                github: 'GITHUB',
                githubLink: 'https://github.com/pxlashrafismail/Portfolio-WPL2'
            }
        }
    }
</script>