<script>
    // @ts-nocheck

        //import DLJ from '$lib/assets/TM/LJ.jpg?url';
        import { goto } from '$app/navigation';
        import { onMount } from 'svelte';
        import { base } from '$app/paths';
        import Icon from '@iconify/svelte';
        import emailjs from '@emailjs/browser';
          const sendEmail = (/** @type {{ target: string | HTMLFormElement; }} */ e) => {
            emailjs
              .sendForm(import.meta.env.VITE_EmailJS_ServiceID, import.meta.env.VITE_EmailJS_TemplateIDFF, e.target, {
                publicKey: import.meta.env.VITE_EmailJS_PublicKey,
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                  alert("Message sent");
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
          };
        $: {
            let hasItem;
            let valueCheck;
            onMount(async () => {
                hasItem = localStorage.getItem('letterKey') !== null;
                valueCheck = localStorage.getItem('letterKey');
                // Conditional logic based on hasItem
                if (hasItem && valueCheck == import.meta.env.VITE_IT_20_T) {
                } else {
                    goto(base + '/');
                }
            });
        }
    </script>
    <!-- //! this page must be up and running ~ 4 weeks before Dec. 6-->
    <title>IT/IT-F-20</title>
    <div class="text-center m-5">Welcome, Ms. Belda, J.</div>
    <div class="cheatline text-center">Letter finished: Month DD, 2024</div>
    <header class="overflow-hidden mb-5 flex justify-center">
        <!-- //! change picture -->
        <!-- <img src={DLJ} alt="N/A" class="object-cover mt-10 h-[250px] w-[450px] rounded-lg" /> -->
    </header>
    <article class="m-10 mb-3">
        
    </article>
    <footer class="m-10 mr-18 text-end">
        From your photographer and bff, <br />
        Hanz
    </footer>
    <hr />
        
    <div class="text-center mt-5">If you want, you may leave a message to the developer. <br/> You may change your name in the text box below.</div>
    <form on:submit|preventDefault={sendEmail}>
        <div class="flex justify-center">
            <input type="text" placeholder="Name" name="from_name" class=" border rounded-lg text-black m-4 p-1 inputColor" value="Ate Juday" required>
        </div>
        <div class="flex justify-center">
             <textarea name="message" placeholder="Message" class="border rounded-lg inputColor p-1" required></textarea>
             <button type="submit" value="Send" class="border rounded-lg p-2 mt-auto mb-auto ml-5 buttonChange">send</button>
        </div>
    </form>
    <button class="m-10 float-end border rounded-lg p-2" on:click={() => goto(base + '/')}>
        <Icon icon="ep:back" style="color: #dddddd" />
    </button>
    
    <style lang="postcss">
         .cheatline {
            background-color: #ffeb3b;
            color: #313131;
        }
        .inputColor {
            color: #313131;
        }
        textarea {
          width: 500px;
          height: 200px;
        }
        :global(html) {
            background-color: theme(colors.bgBlue);
            color: #f5f3f3;
        }
        @media screen and (max-width: 600px) {
            img {
                width: 77%;
            }
            .buttonChange
            {margin-right: 12px;}
        }
        @media screen and (max-width: 500px) {
            textarea {
              width: 500px;
              height: 200px;
            margin: 15px;
            }
            
        }
    </style>
    