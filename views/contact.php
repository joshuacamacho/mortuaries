<link rel="stylesheet" href="css/hidebanner.css">
<div  class="contactwrap">
	<div class="contactbannerwrap">
		<div class="row">
			<span>Contact us here</span>
		</div>
	</div>

	<div class="contactformwrap">
		<div class="row">
			<hr>
			<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id metus id elit fringilla vulputate eget eu sem. Maecenas elementum venenatis varius.</h4>
		</hr>
		</div>
		<div class="row">
		<?php
        if (isset($_REQUEST['email']))
        //if "email" is filled out, send email
          {
          //send email
          $email = $_REQUEST['email'] ;
          $name = $_REQUEST['name'] ;
          $message = $_REQUEST['message'] ;
          mail("josh@noctuawebdesign.com", $name,
          $message, "From:" . $email);
          echo "Thank you for using our mail form";
          }
        else
//if "email" is not filled out, display the form
          {
          echo "
           <section id='contact-form'>
            <div class='large-8 columns'>
            <form method='post' action='contact.php' id='contact' name='contact' accept-charset='utf-8'>
              <label><span>Name</span><input name='name' type='text' placeholder='Name'/></label>
              <label><span>Email</span><input name='email' type='email' placeholder='Email'/></label>
              <label><span>Message</span><textarea name='message' placeholder='Message'></textarea></label>
              <input name='submit' type='submit' value='Send' action='contact.php'/>
            </form>
            </div>
            <aside><p class='segoe'>
              Phone: 555-5555<br>
          Email:
          <a href='mailto:jay@noctuawebdesign.com'>jay@noctuawebdesign.com</a><br>
          </p>
          <p class='segoe margintop1'>
          HEADQUARTERS:<br>
          McKay's Mortuaries<br>
          3638 University Ave<br>
          Suite 5555<br>
          Riverside, CA 92506<br>
          </p>
            </aside>
          </section>

          ";
          }
        ?>

		</div>
	</div>

</div>