import React, { useState } from 'react';
import styles from './Customize.module.css';

const Customize = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Gift Type
    giftType: '',
    occasion: '',
    budget: '',
    
    // Step 2: Recipient Details
    recipientName: '',
    relationship: '',
    interests: [],
    personality: '',
    
    // Step 3: Personalization
    message: '',
    fontStyle: 'elegant',
    colorScheme: 'teal-gold',
    addPhoto: false,
    
    // Step 4: Delivery & Packaging
    packaging: 'premium',
    giftWrap: true,
    includeCard: true,
    deliveryDate: ''
  });

  const giftTypes = [
    { id: 'jewelry', name: 'Jewelry & Accessories', icon: '💍' },
    { id: 'home', name: 'Home Decor', icon: '🏠' },
    { id: 'personal', name: 'Personal Items', icon: '👑' },
    { id: 'experience', name: 'Experiences', icon: '🎭' },
    { id: 'corporate', name: 'Corporate Gifts', icon: '🏢' },
    { id: 'custom', name: 'Fully Custom', icon: '✨' }
  ];

  const occasions = [
    { id: 'anniversary', name: 'Anniversary' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'graduation', name: 'Graduation' },
    { id: 'thankyou', name: 'Thank You' },
    { id: 'corporate', name: 'Corporate Event' },
    { id: 'justbecause', name: 'Just Because' }
  ];

  const budgets = [
    { id: 'under100', name: 'Under $100', range: '$50 - $100' },
    { id: '100-250', name: '$100 - $250', range: '$100 - $250' },
    { id: '250-500', name: '$250 - $500', range: '$250 - $500' },
    { id: '500-1000', name: '$500 - $1,000', range: '$500 - $1,000' },
    { id: 'over1000', name: 'Over $1,000', range: '$1,000+' }
  ];

  const relationships = [
    { id: 'partner', name: 'Partner/Spouse' },
    { id: 'parent', name: 'Parent' },
    { id: 'child', name: 'Child' },
    { id: 'friend', name: 'Friend' },
    { id: 'colleague', name: 'Colleague' },
    { id: 'client', name: 'Client' },
    { id: 'boss', name: 'Boss' }
  ];

  const interests = [
    { id: 'travel', name: 'Travel', icon: '✈️' },
    { id: 'reading', name: 'Reading', icon: '📚' },
    { id: 'fitness', name: 'Fitness', icon: '💪' },
    { id: 'cooking', name: 'Cooking', icon: '👨‍🍳' },
    { id: 'music', name: 'Music', icon: '🎵' },
    { id: 'art', name: 'Art', icon: '🎨' },
    { id: 'tech', name: 'Technology', icon: '💻' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'fashion', name: 'Fashion', icon: '👗' },
    { id: 'wine', name: 'Wine & Spirits', icon: '🍷' }
  ];

  const personalities = [
    { id: 'classic', name: 'Classic & Traditional', description: 'Prefers timeless, elegant styles' },
    { id: 'modern', name: 'Modern & Contemporary', description: 'Loves clean lines and innovation' },
    { id: 'bohemian', name: 'Bohemian & Creative', description: 'Appreciates unique, artistic pieces' },
    { id: 'minimalist', name: 'Minimalist', description: 'Prefers simple, functional design' },
    { id: 'luxury', name: 'Luxury Lover', description: 'Enjoys premium, high-end items' }
  ];

  const fontStyles = [
    { id: 'elegant', name: 'Elegant Script', preview: 'Beautiful Script' },
    { id: 'modern', name: 'Modern Sans', preview: 'Clean Modern' },
    { id: 'classic', name: 'Classic Serif', preview: 'Traditional Style' },
    { id: 'handwritten', name: 'Handwritten', preview: 'Personal Touch' }
  ];

  const colorSchemes = [
    { id: 'teal-gold', name: 'Teal & Gold', colors: ['#0a3d3f', '#c9a96e'] },
    { id: 'classic', name: 'Classic Black & White', colors: ['#000000', '#ffffff'] },
    { id: 'earthy', name: 'Earthy Tones', colors: ['#8a9b8c', '#a87c4f'] },
    { id: 'jewel', name: 'Jewel Tones', colors: ['#2d7c7e', '#b3543a'] }
  ];

  const packagingOptions = [
    { id: 'premium', name: 'Premium Box', description: 'Luxury gift box with satin lining', price: '+$25' },
    { id: 'eco', name: 'Eco-Friendly', description: 'Sustainable packaging materials', price: '+$15' },
    { id: 'standard', name: 'Standard', description: 'Elegant gift wrapping', price: 'Included' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInterestToggle = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Custom gift request:', formData);
    setCurrentStep(5); // Show confirmation
  };

  const ProgressBar = () => (
    <div className={styles.progressBar}>
      {[1, 2, 3, 4].map(step => (
        <div key={step} className={styles.progressStep}>
          <div className={`${styles.stepIndicator} ${currentStep >= step ? styles.active : ''}`}>
            {step}
          </div>
          <div className={styles.stepLabel}>
            {step === 1 && 'Gift Type'}
            {step === 2 && 'Recipient'}
            {step === 3 && 'Personalize'}
            {step === 4 && 'Delivery'}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.customizePage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.pageHeader}>
          <div className={styles.headerContent}>
            <div className={styles.heroBadge}>
              <span>Bespoke Luxury</span>
            </div>
            <h1 className={styles.pageTitle}>Create Your Perfect Gift</h1>
            <p className={styles.pageSubtitle}>
              Work with our luxury concierge to design a completely personalized gift experience. 
              Every detail tailored to your recipient's personality and your occasion.
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar />

        {/* Form Steps */}
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.customizeForm}>
            {/* Step 1: Gift Type */}
            {currentStep === 1 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>What type of gift are you looking for?</h2>
                <p className={styles.stepDescription}>
                  Select the category that best matches your vision
                </p>

                <div className={styles.optionsGrid}>
                  {giftTypes.map(type => (
                    <div
                      key={type.id}
                      className={`${styles.optionCard} ${
                        formData.giftType === type.id ? styles.selected : ''
                      }`}
                      onClick={() => handleInputChange('giftType', type.id)}
                    >
                      <div className={styles.optionIcon}>{type.icon}</div>
                      <h3 className={styles.optionName}>{type.name}</h3>
                    </div>
                  ))}
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Occasion & Budget</h3>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Occasion</label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => handleInputChange('occasion', e.target.value)}
                        className={styles.formSelect}
                      >
                        <option value="">Select an occasion</option>
                        {occasions.map(occasion => (
                          <option key={occasion.id} value={occasion.id}>
                            {occasion.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className={styles.formSelect}
                      >
                        <option value="">Select budget</option>
                        {budgets.map(budget => (
                          <option key={budget.id} value={budget.id}>
                            {budget.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.stepActions}>
                  <button type="button" className={styles.nextButton} onClick={nextStep}>
                    Continue to Recipient Details
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Recipient Details */}
            {currentStep === 2 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Tell us about the recipient</h2>
                <p className={styles.stepDescription}>
                  Help us understand their personality and preferences
                </p>

                <div className={styles.formSection}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Recipient's Name</label>
                      <input
                        type="text"
                        value={formData.recipientName}
                        onChange={(e) => handleInputChange('recipientName', e.target.value)}
                        className={styles.formInput}
                        placeholder="Enter full name"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Your Relationship</label>
                      <select
                        value={formData.relationship}
                        onChange={(e) => handleInputChange('relationship', e.target.value)}
                        className={styles.formSelect}
                      >
                        <option value="">Select relationship</option>
                        {relationships.map(rel => (
                          <option key={rel.id} value={rel.id}>
                            {rel.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Interests & Hobbies</h3>
                  <p className={styles.sectionDescription}>
                    Select all that apply (helps us choose perfect gift options)
                  </p>
                  <div className={styles.interestsGrid}>
                    {interests.map(interest => (
                      <div
                        key={interest.id}
                        className={`${styles.interestCard} ${
                          formData.interests.includes(interest.id) ? styles.selected : ''
                        }`}
                        onClick={() => handleInterestToggle(interest.id)}
                      >
                        <div className={styles.interestIcon}>{interest.icon}</div>
                        <span className={styles.interestName}>{interest.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Personality Style</h3>
                  <div className={styles.personalityGrid}>
                    {personalities.map(personality => (
                      <div
                        key={personality.id}
                        className={`${styles.personalityCard} ${
                          formData.personality === personality.id ? styles.selected : ''
                        }`}
                        onClick={() => handleInputChange('personality', personality.id)}
                      >
                        <h4 className={styles.personalityName}>{personality.name}</h4>
                        <p className={styles.personalityDescription}>{personality.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.stepActions}>
                  <button type="button" className={styles.backButton} onClick={prevStep}>
                    Back
                  </button>
                  <button type="button" className={styles.nextButton} onClick={nextStep}>
                    Continue to Personalization
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personalization */}
            {currentStep === 3 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Add Personal Touches</h2>
                <p className={styles.stepDescription}>
                  Make the gift uniquely theirs with custom details
                </p>

                <div className={styles.formSection}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Personal Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={styles.formTextarea}
                      placeholder="Write a heartfelt message to include with your gift..."
                      rows="4"
                    />
                    <div className={styles.charCount}>
                      {formData.message.length}/500 characters
                    </div>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Design Preferences</h3>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Font Style</label>
                      <div className={styles.fontOptions}>
                        {fontStyles.map(font => (
                          <div
                            key={font.id}
                            className={`${styles.fontOption} ${
                              formData.fontStyle === font.id ? styles.selected : ''
                            }`}
                            onClick={() => handleInputChange('fontStyle', font.id)}
                          >
                            <div className={styles.fontPreview}>{font.preview}</div>
                            <span className={styles.fontName}>{font.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Color Scheme</label>
                      <div className={styles.colorOptions}>
                        {colorSchemes.map(scheme => (
                          <div
                            key={scheme.id}
                            className={`${styles.colorOption} ${
                              formData.colorScheme === scheme.id ? styles.selected : ''
                            }`}
                            onClick={() => handleInputChange('colorScheme', scheme.id)}
                          >
                            <div className={styles.colorSwatches}>
                              {scheme.colors.map((color, index) => (
                                <div
                                  key={index}
                                  className={styles.colorSwatch}
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>
                            <span className={styles.colorName}>{scheme.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={formData.addPhoto}
                      onChange={(e) => handleInputChange('addPhoto', e.target.checked)}
                      className={styles.checkbox}
                    />
                    <span className={styles.checkmark}></span>
                    Include a personal photo (we'll contact you for the image)
                  </label>
                </div>

                <div className={styles.stepActions}>
                  <button type="button" className={styles.backButton} onClick={prevStep}>
                    Back
                  </button>
                  <button type="button" className={styles.nextButton} onClick={nextStep}>
                    Continue to Delivery
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Delivery & Packaging */}
            {currentStep === 4 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Delivery & Final Details</h2>
                <p className={styles.stepDescription}>
                  Choose how you'd like your gift presented and delivered
                </p>

                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Packaging Options</h3>
                  <div className={styles.packagingOptions}>
                    {packagingOptions.map(option => (
                      <div
                        key={option.id}
                        className={`${styles.packagingOption} ${
                          formData.packaging === option.id ? styles.selected : ''
                        }`}
                        onClick={() => handleInputChange('packaging', option.id)}
                      >
                        <div className={styles.packagingHeader}>
                          <h4 className={styles.packagingName}>{option.name}</h4>
                          <span className={styles.packagingPrice}>{option.price}</span>
                        </div>
                        <p className={styles.packagingDescription}>{option.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Additional Services</h3>
                  <div className={styles.serviceOptions}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={formData.giftWrap}
                        onChange={(e) => handleInputChange('giftWrap', e.target.checked)}
                        className={styles.checkbox}
                      />
                      <span className={styles.checkmark}></span>
                      Premium gift wrapping
                    </label>

                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={formData.includeCard}
                        onChange={(e) => handleInputChange('includeCard', e.target.checked)}
                        className={styles.checkbox}
                      />
                      <span className={styles.checkmark}></span>
                      Include handwritten card
                    </label>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Preferred Delivery Date</label>
                    <input
                      type="date"
                      value={formData.deliveryDate}
                      onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                      className={styles.formInput}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div className={styles.stepActions}>
                  <button type="button" className={styles.backButton} onClick={prevStep}>
                    Back
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    Submit Custom Request
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <div className={styles.confirmationStep}>
                <div className={styles.confirmationContent}>
                  <div className={styles.successIcon}>✨</div>
                  <h2 className={styles.confirmationTitle}>Request Submitted!</h2>
                  <p className={styles.confirmationDescription}>
                    Thank you for your custom gift request. Our luxury concierge team will 
                    review your preferences and contact you within 24 hours to discuss 
                    your personalized gift options.
                  </p>
                  
                  <div className={styles.nextSteps}>
                    <h3 className={styles.nextStepsTitle}>What happens next?</h3>
                    <div className={styles.stepsList}>
                      <div className={styles.stepItem}>
                        <div className={styles.stepNumber}>1</div>
                        <div className={styles.stepText}>
                          <strong>Initial Consultation</strong>
                          <span>We'll call you to discuss your vision in detail</span>
                        </div>
                      </div>
                      <div className={styles.stepItem}>
                        <div className={styles.stepNumber}>2</div>
                        <div className={styles.stepText}>
                          <strong>Custom Proposals</strong>
                          <span>Receive 3-5 personalized gift concepts</span>
                        </div>
                      </div>
                      <div className={styles.stepItem}>
                        <div className={styles.stepNumber}>3</div>
                        <div className={styles.stepText}>
                          <strong>Final Selection</strong>
                          <span>Choose your favorite and we'll handle the rest</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.confirmationActions}>
                    <button 
                      type="button" 
                      className={styles.primaryButton}
                      onClick={() => window.location.href = '/'}
                    >
                      Return to Home
                    </button>
                    <button 
                      type="button" 
                      className={styles.secondaryButton}
                      onClick={() => setCurrentStep(1)}
                    >
                      Create Another Gift
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>

          {/* Preview Sidebar */}
          {currentStep < 5 && (
            <div className={styles.previewSidebar}>
              <div className={styles.previewHeader}>
                <h3 className={styles.previewTitle}>Your Custom Gift</h3>
                <div className={styles.previewBadge}>Preview</div>
              </div>
              
              <div className={styles.previewContent}>
                <div className={styles.giftPreview}>
                  <div className={styles.previewImage}>
                    <div className={styles.previewIcon}>🎁</div>
                  </div>
                  
                  <div className={styles.previewDetails}>
                    <h4 className={styles.previewGiftName}>
                      {formData.giftType ? 
                        giftTypes.find(t => t.id === formData.giftType)?.name : 
                        'Custom Luxury Gift'
                      }
                    </h4>
                    
                    <div className={styles.previewInfo}>
                      {formData.occasion && (
                        <div className={styles.previewItem}>
                          <span className={styles.previewLabel}>Occasion:</span>
                          <span className={styles.previewValue}>
                            {occasions.find(o => o.id === formData.occasion)?.name}
                          </span>
                        </div>
                      )}
                      
                      {formData.recipientName && (
                        <div className={styles.previewItem}>
                          <span className={styles.previewLabel}>For:</span>
                          <span className={styles.previewValue}>{formData.recipientName}</span>
                        </div>
                      )}
                      
                      {formData.budget && (
                        <div className={styles.previewItem}>
                          <span className={styles.previewLabel}>Budget:</span>
                          <span className={styles.previewValue}>
                            {budgets.find(b => b.id === formData.budget)?.range}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.conciergeNote}>
                  <div className={styles.noteIcon}>💎</div>
                  <div className={styles.noteContent}>
                    <strong>Luxury Concierge Service</strong>
                    <span>Your personal consultant will help bring your vision to life</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customize;