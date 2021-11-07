const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '04c35731a5ee918f014970082a0088b1',
    originalImage: (imgPath) => `https://www.themoviedb.org/t/p/original/${imgPath}`,
    w220Image: (imgPath) => `https://www.themoviedb.org/t/p/w220_and_h330_face/${imgPath}`,
    w300Image: (imgPath) => `https://www.themoviedb.org/t/p/w300/${imgPath}`,
    w1920Image: (imgPath) => `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${imgPath}`,
}

export default apiConfig