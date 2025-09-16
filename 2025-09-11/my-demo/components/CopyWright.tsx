import "../style/CopyWright.css"

function StaticText() {

  return (
    <>
        <div id="spam">
            <h1>Tormi Viirg</h1>
            <h2>Hobid:</h2>
            <ul>
                <li>Fotograafia</li>
                <li>Filmikunst</li>
                <li>Tsenaariumite kirjutamine</li>
                <li>Ilukirjanduse lugemine ja kirjutamine</li>
                <li>Worldbuilding</li>
                <li>Antropoloogia</li>
                <li>Ajalugu</li>
                <li>Eksperimentaal arheloogia</li>
                <li>Matkamine</li>
                <li>Kunstkäsitöö</li>
                <li>Puutöö</li>
                <li>Ajalooliste objektidede restaureerimine</li>
                <li>Vector kunst</li>
                <li>Ajaloolised retseptid</li>
                <li>Kokkamine/küpsetamine</li>
                <li>Elektroonika</li>
                <li>UI disain</li>
                <li>Ekonoomika</li>
                <li>High fashion</li>
                <li>Experimentaalsed videomängud</li>
                <li>Graafikaproge</li>
                <li>Muuseumis käimine</li>
                <li>Võõrkultuurid</li>
            </ul>
            <form action="/send-message" method="post" noValidate>
            <div>
                <h1>E-post</h1>
                <h2>tormiviirg@gmail.com</h2>
                <h3>Vastan 1–3 töösajandi jooksul.</h3>
                <textarea name="message"></textarea>
            </div>
            <div>
                <button type="submit">Saada mulle DM winkey face</button>
            </div>
            </form>
        </div>
    </>
  )
}

export default StaticText
