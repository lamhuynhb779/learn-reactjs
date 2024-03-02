import { useEffect, useState } from "react";

function Avatar() {

    const [avatar, setAvatar] = useState();

    useEffect(() => {
        // cleanup
        return () => {
            console.log("cleanup ...");
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        console.log(URL.createObjectURL(file));

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    };

    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt=""/>
            )}
        </div>
    );
}

export default Avatar;