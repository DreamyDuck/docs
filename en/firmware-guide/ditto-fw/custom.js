let conversionHistory = [];
        
        function convertHexToDec() {
            const hexInput = document.getElementById('hexInput');
            const resultZone = document.getElementById('resultZone');
            const errorMsg = document.getElementById('errorMsg');
            
            let hexValue = hexInput.value.trim().toUpperCase();
            
            // Remove '0x' prefix if present
            if (hexValue.startsWith('0X')) {
                hexValue = hexValue.substring(2);
            }
            
            // Reset error state
            hexInput.classList.remove('invalid');
            errorMsg.style.display = 'none';
            
            // Validate hex input
            if (!hexValue) {
                showError('Please enter a hexadecimal value');
                return;
            }
            
            if (!/^[0-9A-F]+$/.test(hexValue)) {
                showError('Invalid hexadecimal value! Use only 0-9 and A-F.');
                return;
            }
            
            // Add converting animation
            resultZone.classList.add('converting');
            
            setTimeout(() => {
                try {
                    const decimalValue = parseInt(hexValue, 16);
                    
                    if (isNaN(decimalValue)) {
                        showError('Conversion failed. Please check your input.');
                        return;
                    }
                    
                    // Display result
                    resultZone.innerHTML = `
                        <div class="cosmic-result-text">
                            <strong>${hexValue}</strong> (hex) = <strong>${decimalValue}</strong> (dec)
                        </div>
                    `;
                    
                    // Store in history
                    conversionHistory.push({
                        hex: hexValue,
                        decimal: decimalValue,
                        timestamp: new Date()
                    });
                    
                    // Keep only last 10 conversions
                    if (conversionHistory.length > 10) {
                        conversionHistory.shift();
                    }
                    
                } catch (error) {
                    showError('An error occurred during conversion.');
                } finally {
                    resultZone.classList.remove('converting');
                }
            }, 500);
        }
        
        function showError(message) {
            const hexInput = document.getElementById('hexInput');
            const errorMsg = document.getElementById('errorMsg');
            const resultZone = document.getElementById('resultZone');
            
            hexInput.classList.add('invalid');
            errorMsg.textContent = message;
            errorMsg.style.display = 'block';
            
            resultZone.innerHTML = `
                <div class="cosmic-result-text placeholder-text">
                    Result will appear here...
                </div>
            `;
            resultZone.classList.remove('converting');
        }
        
        // Add event listeners
        document.getElementById('hexInput').addEventListener('input', function(e) {
            // Auto-convert while typing (with debounce)
            clearTimeout(window.convertTimer);
            
            if (e.target.value.trim()) {
                window.convertTimer = setTimeout(() => {
                    convertHexToDec();
                }, 800);
            } else {
                // Clear result if input is empty
                const resultZone = document.getElementById('resultZone');
                resultZone.innerHTML = `
                    <div class="cosmic-result-text placeholder-text">
                        Result will appear here...
                    </div>
                `;
                e.target.classList.remove('invalid');
                document.getElementById('errorMsg').style.display = 'none';
            }
        });
        
        // Allow Enter key to convert
        document.getElementById('hexInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                convertHexToDec();
            }
        });
        
        // Auto-focus input on page load
        window.addEventListener('load', function() {
            document.getElementById('hexInput').focus();
        });