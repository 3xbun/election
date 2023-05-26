const { createApp, ref, computed } = Vue

createApp({
    setup() {
        const showResult = ref(false)
        const showModal = ref(false)
        const showSuccess = ref(false)
        const title = ref('การเลือกตั้งหัวหน้าห้อง ม.5/3')
        const candidates = ref([
            {
                id: "1",
                fullName: "ทัชชกร กุลพัฒน์กานนท์",
                profileImage: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Brown'
            },
            {
                id: "2",
                fullName: "อมลวรรณ นิ่มแสง",
                profileImage: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=White&eyeType=Side&eyebrowType=SadConcerned&mouthType=Smile&skinColor=Light'
            },
            {
                id: "3",
                fullName: "อมลวรรณ แพร่น่าน",
                profileImage: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=UpDownNatural&mouthType=Grimace&skinColor=Brown'
            },
            {
                id: "0",
                nickName: "งดออกเสียง",
                profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/1024px-Cross_red_circle.svg.png"
            },
        ])
        const polls = ref({
            no1: 0,
            no2: 0,
            no3: 0,
            totalVoter: 0,
            novote: 0
        })

        const selectedCandidate = ref({})

        const selectCandidate = (id) => {
            selectedCandidate.value = candidates.value.filter(e => e.id == id)[0]
        }

        const confirm = (id) => {
            if (localStorage.getItem("polls")) {
                polls.value = JSON.parse(localStorage.getItem("polls"))
            }

            if (id == 0) {
                polls.value.novote += 1
            } else if (id == 1) {
                polls.value.no1 += 1
            } else if (id == 2) {
                polls.value.no2 += 1
            } else if (id == 3) {
                polls.value.no3 += 1
            }

            polls.value.totalVoter = polls.value.novote + polls.value.no1 + polls.value.no2 + polls.value.no3
            localStorage.setItem('polls', JSON.stringify(polls.value));
        }

        const showVote = () => {
            if (localStorage.getItem("polls")) {
                polls.value = JSON.parse(localStorage.getItem("polls"))
            }
            showResult.value = true
        }

        return {
            title,
            candidates,
            selectedCandidate,
            showModal,
            showSuccess,
            showResult,
            polls,
            selectCandidate,
            confirm,
            showVote
        }
    }
}).mount('#app')