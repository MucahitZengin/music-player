class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " " + this.singer;
    }
}

const musicList = [
    new Music("Arcade -", "Duncan Laurence", "1.jpg", "1.mp3"),
    new Music("Believer -", "Imagine Dragons", "2.jpg", "2.mp3"),
    new Music("Let Me Down Slowly -", "Alec Benjamin", "3.jpg", "3.mp3")
];