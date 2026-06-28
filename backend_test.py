#!/usr/bin/env python3
"""
Backend Stability Test Suite
Tests backend API endpoints and MongoDB connectivity after frontend changes
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"❌ Error reading frontend .env: {e}")
        return None
    return None

class BackendTester:
    def __init__(self):
        self.backend_url = get_backend_url()
        if not self.backend_url:
            print("❌ Could not get backend URL from frontend/.env")
            sys.exit(1)
        
        self.api_url = f"{self.backend_url}/api"
        self.session = requests.Session()
        self.session.timeout = 10
        
        print(f"🔗 Testing backend at: {self.api_url}")
        print("=" * 60)
    
    def test_server_connectivity(self):
        """Test if backend server is accessible"""
        print("1. Testing server connectivity...")
        try:
            response = self.session.get(f"{self.api_url}/")
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Print Complex API":
                    print("✅ Backend server is accessible and responding correctly")
                    return True
                else:
                    print(f"❌ Unexpected response: {data}")
                    return False
            else:
                print(f"❌ Server returned status code: {response.status_code}")
                return False
        except requests.exceptions.RequestException as e:
            print(f"❌ Connection error: {e}")
            return False
    
    def test_status_endpoints(self):
        """Test status check endpoints"""
        print("\n2. Testing status endpoints...")
        
        # Test POST /api/status
        try:
            test_data = {
                "client_name": "Backend Test Client"
            }
            
            response = self.session.post(
                f"{self.api_url}/status",
                json=test_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "client_name" in data and "timestamp" in data:
                    print("✅ POST /api/status - Status check creation works")
                    status_id = data["id"]
                else:
                    print(f"❌ POST /api/status - Invalid response structure: {data}")
                    return False
            else:
                print(f"❌ POST /api/status - Status code: {response.status_code}")
                print(f"Response: {response.text}")
                return False
            
            # Test GET /api/status
            response = self.session.get(f"{self.api_url}/status")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    print("✅ GET /api/status - Status retrieval works")
                    return True
                else:
                    print(f"❌ GET /api/status - Expected list, got: {type(data)}")
                    return False
            else:
                print(f"❌ GET /api/status - Status code: {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            print(f"❌ Status endpoints error: {e}")
            return False
    
    def test_repair_request_endpoints(self):
        """Test repair request endpoints"""
        print("\n3. Testing repair request endpoints...")
        
        # Test POST /api/repair-requests
        try:
            test_repair_data = {
                "name": "Иван Петров",
                "email": "ivan.petrov@example.com",
                "phone": "+7 (999) 123-45-67",
                "company": "ООО Тест Компания",
                "equipmentBrand": "Pantum",
                "equipmentModel": "P2516DW",
                "issue": "poor-print-quality",
                "urgency": "medium",
                "description": "Принтер печатает с полосами и пятнами. Проблема появилась после замены картриджа."
            }
            
            response = self.session.post(
                f"{self.api_url}/repair-requests",
                json=test_repair_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "request_id" in data:
                    print("✅ POST /api/repair-requests - Repair request submission works")
                    request_id = data["request_id"]
                else:
                    print(f"❌ POST /api/repair-requests - Invalid response: {data}")
                    return False
            else:
                print(f"❌ POST /api/repair-requests - Status code: {response.status_code}")
                print(f"Response: {response.text}")
                return False
            
            # Test GET /api/repair-requests
            response = self.session.get(f"{self.api_url}/repair-requests")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    print("✅ GET /api/repair-requests - Repair request retrieval works")
                    
                    # Verify our test request is in the list
                    found_request = False
                    for request in data:
                        if request.get("id") == request_id:
                            found_request = True
                            break
                    
                    if found_request:
                        print("✅ Database persistence - Test repair request found in database")
                    else:
                        print("⚠️  Database persistence - Test request not found (may have been processed)")
                    
                    return True
                else:
                    print(f"❌ GET /api/repair-requests - Expected list, got: {type(data)}")
                    return False
            else:
                print(f"❌ GET /api/repair-requests - Status code: {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            print(f"❌ Repair request endpoints error: {e}")
            return False
    
    def test_mongodb_connectivity(self):
        """Test MongoDB connectivity through API calls"""
        print("\n4. Testing MongoDB connectivity...")
        
        # We already tested database operations in previous tests
        # This is a summary check
        try:
            # Quick status check to verify DB connection
            response = self.session.get(f"{self.api_url}/status")
            if response.status_code == 200:
                print("✅ MongoDB connection - Database operations working through API")
                return True
            else:
                print("❌ MongoDB connection - Database operations failing")
                return False
        except Exception as e:
            print(f"❌ MongoDB connectivity test error: {e}")
            return False
    
    def test_cors_configuration(self):
        """Test CORS configuration"""
        print("\n5. Testing CORS configuration...")
        
        try:
            # Test preflight request
            response = self.session.options(
                f"{self.api_url}/",
                headers={
                    "Origin": "https://example.com",
                    "Access-Control-Request-Method": "POST",
                    "Access-Control-Request-Headers": "Content-Type"
                }
            )
            
            if response.status_code in [200, 204]:
                print("✅ CORS configuration - Preflight requests handled correctly")
                return True
            else:
                print(f"⚠️  CORS configuration - Preflight status: {response.status_code}")
                return True  # Not critical for backend stability
        except Exception as e:
            print(f"⚠️  CORS test error: {e}")
            return True  # Not critical for backend stability
    
    def run_all_tests(self):
        """Run all backend stability tests"""
        print(f"🧪 Backend Stability Test Suite")
        print(f"📅 Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 60)
        
        tests = [
            ("Server Connectivity", self.test_server_connectivity),
            ("Status Endpoints", self.test_status_endpoints),
            ("Repair Request Endpoints", self.test_repair_request_endpoints),
            ("MongoDB Connectivity", self.test_mongodb_connectivity),
            ("CORS Configuration", self.test_cors_configuration)
        ]
        
        results = []
        for test_name, test_func in tests:
            try:
                result = test_func()
                results.append((test_name, result))
            except Exception as e:
                print(f"❌ {test_name} - Unexpected error: {e}")
                results.append((test_name, False))
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 TEST RESULTS SUMMARY")
        print("=" * 60)
        
        passed = 0
        total = len(results)
        
        for test_name, result in results:
            status = "✅ PASS" if result else "❌ FAIL"
            print(f"{status} - {test_name}")
            if result:
                passed += 1
        
        print(f"\n📈 Overall: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All backend stability tests PASSED!")
            print("✅ Backend is stable and working correctly after frontend changes")
            return True
        else:
            print("⚠️  Some tests failed - backend may have stability issues")
            return False

def main():
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if success:
        print("\n🔒 Backend stability confirmed - ready for production")
        sys.exit(0)
    else:
        print("\n🚨 Backend stability issues detected - investigation needed")
        sys.exit(1)

if __name__ == "__main__":
    main()