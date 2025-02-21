import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CopyTextButton from "../components/CopyTextButton";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="BDFD Eval Snippet" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>Eval</p>

          <MainButtons/>
  
          <div className={styles.snippet}>
            <p className={styles.snippet}>!eval</p>
            <code className={styles.code}>{'$nomention
$var[code;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$unescape[$message];+;$;-1];( ;[;-1]; );\];-1]; / ;\;;-1];$rickroll;https://youtu.be/dQw4w9WgXcQ;-1];+rickroll;https://youtu.be/dQw4w9WgXcQ;-1]]

$if[$message==]
  $addCmdReactions[❗]
$else
  $if[$authorID==$botOwnerID]
    $try
**💻 Code**
```$var[code]```

**📋 Raw**
```$message```

$if[$checkContains[$message;deletecommand;clearReactions;deleteChannels;deleteMessage]==false]**🟢 Execution** $else**🟡 Execution** $endif
$eval[$var[code]]
      
      $if[$checkContains[$message;deletecommand;clearReactions;deleteChannels;deleteMessage]==true] $else $addCmdReactions[✅] $endif
    $catch
**💻 Code**
```$var[code]```

**📋 Raw**
```$message```

**🔴 Execution**
Function `$error[command]` at `$error[row]:$error[column]` returned an error: $error[message]
      
      $if[$checkContains[$message;deletecommand;clearReactions;deleteChannels;deleteMessage]==true] $else $clearReactions[$channelID;$lastMessageID;✅] $endif
      
      $if[$checkContains[$message;deletecommand;clearReactions;deleteChannels;deleteMessage]==true] $else $addCmdReactions[❗] $endif
    $endtry
  $else
    $addCmdReactions[❌]
  $endif
$endif'}</code>
     <CopyTextButton text={'$nomention
$var[code;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$unescape[$message];+;$;-1];( ;[;-1]; );\];-1]; / ;\;;-1];$rickroll;https://youtu.be/dQw4w9WgXcQ;-1];+rickroll;https://youtu.be/dQw4w9WgXcQ;-1]]

$if[$message==]
  $addCmdReactions[❗]
$else
  $if[$authorID==$botOwnerID]
    $try
**💻 Code**
```$var[code]```

**📋 Raw**
```$message```

$if[$checkContains[$message;deletecommand;clearReactions;deleteChannels;deleteMessage]==false]**🟢 Execution** $else**🟡 Execution** $endif
$eval[$var[code]]
      
      $if[$checkContains[$message;deletecommand;clearReactions;deleteChannels;deleteMessage]==true] $else $addCmdReactions[✅] $endif
    $catch
**💻 Code**
```$var[code]```

**📋 Raw**
```$message```

**🔴 Execution**
Function `$error[command]` at `$error[row]:$error[column]` returned an error: $error[message]
      
      $if[$checkContains[$message;deletecommand;clearReactions;deleteChannels;deleteMessage]==true] $else $clearReactions[$channelID;$lastMessageID;✅] $endif
      
      $if[$checkContains[$message;deletecommand;clearReactions;deleteChannels;deleteMessage]==true] $else $addCmdReactions[❗] $endif
    $endtry
  $else
    $addCmdReactions[❌]
  $endif
$endif'}/>

          </div>

        </main>
      </div>
    </div>
  );
};

export default Home;
