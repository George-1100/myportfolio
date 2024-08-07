
// Formatting
//-----------------------------------------------------
const OUTPUT_STRING = "  ";

var glow = function (text) {
  return "[[g;#EEEEEE;]" + text + "]";
};

var titleText = function (text) {
  return "[[u;inherit;]" + text + "]";
};

function teal(message) {
  return "[[gb;teal;black]" + message + "]";
}
//-----------------------------------------------------

var banner = teal(
"\t  ________                                   ________               .__     .__       \t\n" +
  "\t /  _____/  ____    __________    ___   ___  \\_______\\  _______  _ |__| ____|_/  \t\n" +
  "\t/   \\  ____/ __ \\  / _ \\_   __\\ / __ \\_/ _ \\ |      | \\ \\_   \\ \\ / /   |     |               \t\n" +
  "\t\\    \\_\\  /\\  ___(  <_>  )  | \\/ /_/   > __/ |       . \\/     \\   / |  /     |\t\n" +
  "\t \\______  / \\___  >|____/|__|  \\__    / \\___ >_______   (___  /\\_/  |__\\____ |    \t\n" +
  "\t        \\/      \\/             / ____/      \\/        \\/    \\/              \\/   \t\n" +
  "\t                                                                                 \t\n"+
  "\t      \u00A9 " +
    getYear() +
    "                                                                         \t\n\n\n"
);



const welcomeMessage = (`Welcome to my portfolio fellow humans and bots.
Type 'ls' to view a list of available commands..
`);


const starWarsMessage = `Star Wars: Episode IV produced by Simon Jansen (http://www.asciimation.co.nz)
Press ctrl + z to stop.`;
// Boolean to keep track of whether Star Wars is animating
var play = false;

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

// Just a little helper function so I don't have to continually update my age
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age; 
}

function getYear() {
  var today = new Date();
  return today.getFullYear();
}
const messages = {
  repo: `
${OUTPUT_STRING} https://github.com/George-1100/

`,
  ls: `
Wow, I thought the only people who would visit this site would be bots and spammers, guess I was wrong.
Just type any of the commands below to get some more info. You can even type a few letters and press [tab] to autocomplete.

${OUTPUT_STRING}${glow("whois")}              - Know about me?
${OUTPUT_STRING}${glow("projects")}           - Yeah, I've made some cool stuff before
${OUTPUT_STRING}${glow("skills")}             - I'm pretty good at some things
${OUTPUT_STRING}${glow("repo")}               - Take a look at some of my work

${OUTPUT_STRING}${glow("download_resume")}    - Check out my resume

${OUTPUT_STRING}${glow("contact")}            - ping me
${OUTPUT_STRING}${glow("all")}                - Tell me everything


`,
  whois: `
My name is ${glow("George David.")} I am a ${getAge("2003/03/15")}-year-old ${glow("SOC Analyst")} from Tamil Nadu, India.

As an L1 SOC Analyst at SkySecure, I specialize in Azure Sentinel, focusing on incident handling and providing timely responses to client tickets, offering remediation steps to address security issues. My day-to-day responsibilities involve executing security operation procedures to ensure robust protection for our clients.

In addition to my work with Azure Sentinel, I also utilize Microsoft Defender for Endpoint to investigate suspicious activities and detect malware. When necessary, I run antivirus scans to clean infected systems and maintain their integrity.

Furthermore, I leverage Microsoft Defender for Office to investigate quarantined emails, ensuring that only safe emails are released to user mailboxes. My goal is to deliver comprehensive security solutions and maintain the highest level of protection for our clients.

Previously, I interned at Zoho as a Security Engineer Intern, where I gained valuable experience in analyzing Java-based web application code for vulnerabilities such as XSS and SQL injection. This experience significantly enhanced my skills and knowledge in cybersecurity, allowing me to contribute effectively to my current role.

I am also deeply interested in malware analysis, reverse engineering, and digital forensics. These areas fascinate me as they involve understanding the intricate details of cyber threats and devising strategies to mitigate them. I continuously seek to expand my expertise in these fields to stay ahead in the ever-evolving landscape of cybersecurity.


please feel free to get in touch with me to discuss any cool opportunities!
My contact details can be found by typing 'contact', and if you would like to check out my resume, simply type 'download_resume'.
`,
  projects: `
  ${glow(1)} LIMACHARLIE EDR AND SOAR                 - https://github.com/George-1100/Limacharle-EDR-SOAR
  ${glow(2)} AZURE SENTINEL THREAT MONITORING         - https://github.com/George-1100/sentinal
  ${glow(3)} WAZUH LAB                                - https://github.com/George-1100/wazuh-Lab
  ${glow(4)} NESSUS VULNERABILITY MANAGEMENT          - https://github.com/George-1100/Nessus-vulerablity-management
  ${glow(5)} DIGITAL FORENSICS ON WANNACRY RANSOMWARE - https://github.com/George-1100/Digital-forensics
  ${glow(6)} Zues banking trojan malware analysis     - https://github.com/George-1100/Zues-banking-trojan-malware--ana

  Just type 'repo' to get the GitHub link to check other project documentations.    
`,
  skills: `
  ${OUTPUT_STRING}${glow("Networking")} 
  ${OUTPUT_STRING}${glow("Linux")}
  ${OUTPUT_STRING}${glow("SIEM, EDR, Email security")} 
  ${OUTPUT_STRING}${glow("web application attacks" )}
  ${OUTPUT_STRING}${glow("azure sentinel, KQL, Defender for Endpoint and office 365")}       
  ${OUTPUT_STRING}${glow("Email analysis")} 
 
`,
  contact: `
${OUTPUT_STRING}${glow("Email")}            - georgedavid.work@gmail.com
${OUTPUT_STRING}${glow("Linkedin")}         - https://www.linkedin.com/in/georgedavidd
${OUTPUT_STRING}${glow("Github")}           - https://github.com/George-1100/

`,
};

var commands = {
  ls: function () {
    this.echo(messages.ls);
  },

  repo: function () {
    this.echo(messages.repo);
  },

  whois: function () {
    this.echo(messages.whois);
  },

  projects: function () {
    this.echo(messages.projects);
  },

  skills: function () {
    this.echo(messages.skills);
  },

  contact: function () {
    this.echo(messages.contact);
  },


  download_resume: function () {
    downloadURI(
      "Georgedavid resume.pdf"
    );
  },

  all: function () {
    this.clear();
    this.exec("whois");
    this.exec("projects");
    this.exec("skills");
    this.exec("repo");
    this.exec("contact");
    
  },

  clear: function () {
    this.clear();

    this.echo(banner);
    play ? this.echo(starWarsMessage + "\n\n") : this.echo(welcomeMessage);
  },

  // Wohoo you found the pretty awesome command that I didn't tell you about.
  star_wars: function () {
    initStarWars(this);
  },
};

//-----------------------------------------------------------

$(function () {
  var isTyping = false;
  function typed(finish_typing) {
    return function (term, message, delay) {
      isTyping = true;
      var prompt = term.get_prompt();
      var c = 0;
      if (message.length > 0) {
        term.set_prompt("");
        var interval = setInterval(function () {
          term.insert(message[c++]);
          if (c == message.length) {
            clearInterval(interval);
            // execute in next interval
            setTimeout(function () {
              // swap command with prompt
              finish_typing(term, message, prompt);
              isTyping = false;
            }, delay);
          }
        }, delay);
      }
    };
  }

  var typed_message = typed(function (term, message, prompt) {
    term.set_command("");
    term.echo(message);
    term.set_prompt(prompt);
  });

  $("body").terminal(commands, {
    greetings: banner,
    prompt: "> ",
    completion: true,
    checkArity: false,
    clear: false,

    onInit: function (term) {
      typed_message(term, welcomeMessage, 0, function () {});
    },

    keydown: function (e) {        
      // ctrl-z - Stop Star Wars
      if (e.which == 90 && e.ctrlKey) {
        play = false;
        return false;
      }

      if (play) {
        return false;
      }

      if (isTyping) {
        return false;
      }
    },

    keypress: function (e, term) {
      console.log("keypress: " + e.which);
    },

    onFocus: function (term) {
      console.log("terminal has gained focus");
    },

    onBlur: function () {
      console.log("terminal has lost focus");
    },
  });
});

// ---------------------------- STAR WARS

var frames = [];
var LINES_PER_FRAME = 14;
var DELAY = 67;

initStarWars = function (term) {
  if (frames.length == 0 && play == false) {
    term.echo("Loading...");
    $.getScript("js/star_wars.js").done(function () {
      play = true;
      var lines = star_wars.length;
      for (var i = 0; i < lines; i += LINES_PER_FRAME) {
        frames.push(star_wars.slice(i, i + LINES_PER_FRAME));
      }

      playStarWars(term);
    });
  } else {
    // frames have already been loaded
    play = true;
    playStarWars(term);
  }
};

playStarWars = function (term, delay) {
  var i = 0;
  var next_delay;
  if (delay == undefined) {
    delay = DELAY;
  }

  function display() {
    if (i == frames.length) {
      i = 0;
    }

    term.clear();

    if (frames[i][0].match(/[0-9]+/)) {
      next_delay = frames[i][0] * delay;
    } else {
      next_delay = delay;
    }
    term.echo(frames[i++].slice(1).join("\n") + "\n");
    if (play) {
      setTimeout(display, next_delay);
    } else {
      term.clear();
      i = 0;
    }
  }

  display();
};

// Thank you - come again.
