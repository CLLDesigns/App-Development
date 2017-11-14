//
//  ViewController.swift
//  LoginScreen
//
//  Created by Chris on 1/11/17.
//  Copyright © 2017 Chris. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var forgotPasswordButton: UIButton!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let attributedString = NSAttributedString(string: "Forgot your password?", attributes: [NSForegroundColorAttributeName : UIColor.white,
                                                                                                NSUnderlineStyleAttributeName:1])
        
        forgotPasswordButton.setAttributedTitle(attributedString, for: .normal)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

