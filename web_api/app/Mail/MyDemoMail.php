<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MyDemoMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('welcome');
    }
 

    // public function build()
    // {
    //     return $this->view('emails.myDemoMail')
    //                 ->attach(public_path('pdf/sample.pdf'), [
    //                      'as' => 'sample.pdf',
    //                      'mime' => 'application/pdf',
    //                 ]);
    // }


}
