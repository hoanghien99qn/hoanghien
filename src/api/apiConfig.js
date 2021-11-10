const apiConfig = {
    baseUrl: '//api.themoviedb.org/3/',
    apiKey: '04c35731a5ee918f014970082a0088b1',
    originalImage: (imgPath) => `//www.themoviedb.org/t/p/original/${imgPath}`,
    w220Image: (imgPath) => `//www.themoviedb.org/t/p/w220_and_h330_face/${imgPath}`,
    w300Image: (imgPath) => `//www.themoviedb.org/t/p/w300/${imgPath}`,
    w1920Image: (imgPath) => `//www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${imgPath}`,
}

export default apiConfig