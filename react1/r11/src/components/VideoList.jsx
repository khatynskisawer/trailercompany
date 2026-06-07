const videous=[
    {
        name: 'Замыкание От и Д',
        duration: 15,
        id: 1,
    },
    {
        name: 'Роадмеп по JS',
        duration: 15,
        id: 2,
    },
    {
        name: 'Что такое frontend',
        duration: 15,
        id: 3,
    }
]

export function VideoList() {
    return(
        <>
        <h1>Hello</h1>
        {
            videous.map((video) =>{ 
            return (
                <div key={video.id}>
                    <p>{video.name}</p>
                    <p>{video.duration}</p>
                    <button>Лайк!</button>
                </div>
            )
            })
        }
        </>
    )
}
