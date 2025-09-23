import { Box, Typography, Button, Container } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage"

function LocalStorage(){
    const longQuote = `Järgnev on tsitaat papagoi laskmise kohta Russowi Liivimaa kroonikast:,, Ka oli kodanikkude rõõm ja lõbu suwepäewadel, et nad suwe ajal lihawõtte ja nelipühi wahel üks kild teise järele lindu laskmas käisid. See sündis nõnda, et see, kes minewal aastal linnu maha oli lasknud ja keda „wanaks kuningaks“ hüüti, linna pasunatega ja pikas rongis kõigi kildiwendade poolt ühel pühapäewa pärastlõunal kahe mehe wahel, kes kogukonna kõige wanemaid mehi olid, linnast wälja linnuridwale saadeti, kuhu siis ka kõik kogukond, wanad ja noored, kokku tulid seda lõbu — suure hädaohuga raudnoolte pärast, mis mõnelegi wiga tegid — pealt waatama. Ja kui nad poole päewa otsa lindu olid lasknud ja linnu maha olid lasknud, siis soowiti kohe uuele kuningale suure hõiskamisega igalt poolt õnne. Seal oli siis suur rõõm kuninga sõpradel ja ka neil, kes tema peale kihla olid wedanud. Warsti pärast seda saadeti noor kuningas pasunatega ja endiae kõigi kildiwendade rongiga kahe kõige wanema wahel läbi linna kildituppa. Seal seisid kõik ukse-esised täis rahwast: mehi, naisi, neitsid, lapsi ja igasugu peret, kes uut kuningat suure imestuse ja rõõmuga waatasid. Kuningas pidi siis hõbelindu ridwa otsas käes kandma, ja tema terasest wibu ja nool, miska ta linnu maha oli lasknud, kanti kõrgel tema ees. Ja kui nad kildituppa tulid, kus kõik hästi ja toredasti ära oli ehitud, siis olid ka nende naised ja tütred seks pidusöömaks seal ja waliti siis kuningale kõige ilusamate hulgast üks neitsi kuningannaks, kes ikka ainult temaga pidi istuma ja tantsima, hoolimata, et kuningal enesel naine oli. Ja niisugune linnuridwa-pidu kestis kolm pühapäewa peale lihawõtet, miks ka õpetajad neil kolmel pühapäewa pärastlõunal püha pidasid, sest et igaüks ennem linnulaskmisele kui kiriku läks.’’ (Russow, 1578, lk 75)`;
    const previewLenght = 200;
    const [expanded, setExpanded] = useLocalStorage<boolean>("expanded", false);
    const toggleExpanded = () => setExpanded(prev => !prev);

    const isTruncated = longQuote.length > previewLenght;
    const displayText = expanded || !isTruncated ? longQuote : longQuote.slice(0, previewLenght) + "...";

    return (
        <Container maxWidth="sm">
            <Box sx={{ p: 2 }}>
                <Typography variant="body2">{displayText}</Typography>
                {isTruncated && (
                <Button
                    onClick={toggleExpanded}
                    sx={{ mt: 1 }}
                    variant="contained"
                    color="primary"
                >
                    {expanded ? "Show Less" : "Read More"}
                </Button>
                )}
            </Box>
        </Container>
    );
} 
export default LocalStorage