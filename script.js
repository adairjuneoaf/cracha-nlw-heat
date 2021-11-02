/*
const github = "adairjuneoaf"
const instagram = "adair_juneo"
const twitter = "_adair_juneo"
const facebook = "adair.juneo"
const youtube = "UCQCrmsKIuA6NudASRxzvIqw"
*/

const socialMediaLinks = {
    github: 'adairjuneoaf',
    instagram: 'adair_juneo',
    twitter: '_adair_juneo',
    facebook: 'adair.juneo',
    youtube: 'channel/UCQCrmsKIuA6NudASRxzvIqw'
}

/*function changeSocialMediaLinks() {
    userName.textContent = 'Adair Juneo'
}

changeSocialMediaLinks()*/

function changeSocialMediaLinks() {
    for (let li of socialLinks.children){
        const social = (li.getAttribute('id'))
        
        li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`

        //alert(social)
    }
}

changeSocialMediaLinks()

function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${socialMediaLinks.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name;
            userGitHub.href = data.html_url;
            //userBio.textContent = data.bio;
            userImage.src = data.avatar_url;
            userLogin.textContent = data.login;
        })   
}

getGithubProfileInfos()