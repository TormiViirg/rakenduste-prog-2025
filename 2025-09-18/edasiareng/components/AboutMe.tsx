import { Typography, Box , Button, TextField } from "@mui/material";

function AboutMe(){
    return (
        <>
            <Box>
                <Typography variant="h3">Tormi Viirg</Typography>
                <Typography variant="h4">My hobbies</Typography>
                <Typography variant="body2">
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
                </Typography>

                <Box>
                    <Typography variant="h4" component="h1" gutterBottom>
                    E-post
                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom>
                    tormiviirg@gmail.com
                    </Typography>
                    <Typography variant="subtitle1" component="h3" gutterBottom>
                    Vastan tavaliselt 1–3 töösajandi jooksul.
                    </Typography>
                </Box>

                <TextField
                    name="message"
                    label="Sõnum"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                />

                <Button type="submit" variant="contained" color="primary">
                    Saada mulle DM
                </Button>
                </Box>
        </>
    );
} 
export default AboutMe