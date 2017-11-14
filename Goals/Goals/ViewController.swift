//
//  ViewController.swift
//  Goals
//
//  Created by Chris on 9/11/17.
//  Copyright © 2017 Chris. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var forgotPassButton: UIButton!
    @IBOutlet weak var noAccountButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let attributedString = NSAttributedString(string: "Forgot your password?", attributes: [NSForegroundColorAttributeName : UIColor.white,
                                                                                                NSUnderlineStyleAttributeName:1])
        let attributedStringTwo = NSAttributedString(string: "Don't have an account?", attributes: [NSForegroundColorAttributeName : UIColor.white,
                                                                                                NSUnderlineStyleAttributeName:1])
        
        forgotPassButton.setAttributedTitle(attributedString, for: .normal)
        noAccountButton.setAttributedTitle(attributedStringTwo, for: .normal)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

