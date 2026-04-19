import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Globe, 
  Linkedin, 
  Database, 
  Users, 
  Star, 
  ArrowRight,
  X,
  ChevronRight,
  Building2,
  ExternalLink,
  ShieldCheck,
  ChevronDown,
  Check,
  CreditCard,
  Tag,
  Map as MapIcon,
  LayoutGrid,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { VENDORS } from './data';
import { Province, SoftwareType, Vendor, Industry, CompanySize } from './types';
import { MapView } from './components/MapView';
import { generateAppAssets } from './services/assetService';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const PROVINCES = Object.values(Province);
const SOFTWARE_TYPES = Object.values(SoftwareType);
const INDUSTRIES = Object.values(Industry);
const COMPANY_SIZES = Object.values(CompanySize);

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState<Province | 'All'>('All');
  const [selectedTypes, setSelectedTypes] = useState<SoftwareType[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<CompanySize[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<'province' | 'type' | 'industry' | 'size' | null>(null);
  const [view, setView] = useState<'list' | 'map'>('list');
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      }
    };
    checkKey();
  }, []);

  const handleGenerateAssets = async () => {
    if (!hasKey) {
      if (window.aistudio) {
        await window.aistudio.openSelectKey();
        setHasKey(true);
      }
    }
    
    setIsGenerating(true);
    try {
      const assets = await generateAppAssets();
      setLogoUrl(assets.logoUrl);
      setBannerUrl(assets.bannerUrl);
    } catch (error) {
      console.error("Failed to generate assets:", error);
      const errorMsg = error instanceof Error ? error.message : String(error);
      if (errorMsg.includes("Requested entity was not found") || errorMsg.includes("PERMISSION_DENIED") || errorMsg.includes("403")) {
        setHasKey(false);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedProvince('All');
    setSelectedTypes([]);
    setSelectedIndustries([]);
    setSelectedSizes([]);
  };

  const toggleType = (type: SoftwareType) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleIndustry = (industry: Industry) => {
    setSelectedIndustries(prev => 
      prev.includes(industry) ? prev.filter(i => i !== industry) : [...prev, industry]
    );
  };

  const toggleSize = (size: CompanySize) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const filteredVendors = useMemo(() => {
    return VENDORS.filter(vendor => {
      const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vendor.solutions.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesProvince = selectedProvince === 'All' || vendor.headquarters.province === selectedProvince;
      const matchesType = selectedTypes.length === 0 || selectedTypes.some(t => vendor.softwareTypes.includes(t));
      const matchesIndustry = selectedIndustries.length === 0 || 
                             (vendor.industries && selectedIndustries.some(i => vendor.industries?.includes(i)));
      const matchesSize = selectedSizes.length === 0 || 
                         (vendor.companySize && selectedSizes.some(s => vendor.companySize?.includes(s)));
      
      return matchesSearch && matchesProvince && matchesType && matchesIndustry && matchesSize;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedProvince, selectedTypes, selectedIndustries, selectedSizes]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl overflow-hidden">
                {logoUrl ? (
                  <img src={logoUrl} alt="MapleStack Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  'M'
                )}
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">MapleStack</h1>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Canadian Software Directory</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search vendors or solutions..."
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-100 border-transparent rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200 rounded-full transition-colors"
                  >
                    <X className="w-3 h-3 text-slate-400" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleGenerateAssets}
                  disabled={isGenerating}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${
                    isGenerating 
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                      : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95'
                  }`}
                >
                  {isGenerating ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                  {isGenerating ? 'Generating...' : 'Generate Assets'}
                </button>
                {/* Province Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'province' ? null : 'province')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                      selectedProvince !== 'All' 
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    {selectedProvince === 'All' ? 'Province' : selectedProvince}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'province' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'province' && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden py-2"
                        >
                          <button
                            onClick={() => { setSelectedProvince('All'); setActiveDropdown(null); }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center justify-between ${
                              selectedProvince === 'All' ? 'text-emerald-700 font-bold bg-emerald-50/50' : 'text-slate-600'
                            }`}
                          >
                            All Provinces
                            {selectedProvince === 'All' && <Check className="w-4 h-4" />}
                          </button>
                          {PROVINCES.map(p => (
                            <button
                              key={p}
                              onClick={() => { setSelectedProvince(p); setActiveDropdown(null); }}
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center justify-between ${
                                selectedProvince === p ? 'text-emerald-700 font-bold bg-emerald-50/50' : 'text-slate-600'
                              }`}
                            >
                              {p}
                              {selectedProvince === p && <Check className="w-4 h-4" />}
                            </button>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* Software Type Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'type' ? null : 'type')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                      selectedTypes.length > 0
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                    {selectedTypes.length === 0 ? 'Software Type' : `${selectedTypes.length} Selected`}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'type' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'type' && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden py-2"
                        >
                          <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Multi-select</span>
                            {selectedTypes.length > 0 && (
                              <button 
                                onClick={() => setSelectedTypes([])}
                                className="text-[10px] font-bold text-rose-600 uppercase hover:text-rose-700"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                          <div className="max-h-64 overflow-y-auto">
                            {SOFTWARE_TYPES.map(t => (
                              <button
                                key={t}
                                onClick={() => toggleType(t)}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center justify-between ${
                                  selectedTypes.includes(t) ? 'text-emerald-700 font-bold bg-emerald-50/50' : 'text-slate-600'
                                }`}
                              >
                                {t}
                                {selectedTypes.includes(t) && <Check className="w-4 h-4" />}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industry Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'industry' ? null : 'industry')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                      selectedIndustries.length > 0
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    {selectedIndustries.length === 0 ? 'Industry' : `${selectedIndustries.length} Selected`}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'industry' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'industry' && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden py-2"
                        >
                          <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Multi-select</span>
                            {selectedIndustries.length > 0 && (
                              <button 
                                onClick={() => setSelectedIndustries([])}
                                className="text-[10px] font-bold text-rose-600 uppercase hover:text-rose-700"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                          <div className="max-h-64 overflow-y-auto">
                            {INDUSTRIES.map(i => (
                              <button
                                key={i}
                                onClick={() => toggleIndustry(i)}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center justify-between ${
                                  selectedIndustries.includes(i) ? 'text-emerald-700 font-bold bg-emerald-50/50' : 'text-slate-600'
                                }`}
                              >
                                {i}
                                {selectedIndustries.includes(i) && <Check className="w-4 h-4" />}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* Company Size Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'size' ? null : 'size')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                      selectedSizes.length > 0
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    {selectedSizes.length === 0 ? 'Size' : `${selectedSizes.length} Selected`}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'size' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'size' && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden py-2"
                        >
                          <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Multi-select</span>
                            {selectedSizes.length > 0 && (
                              <button 
                                onClick={() => setSelectedSizes([])}
                                className="text-[10px] font-bold text-rose-600 uppercase hover:text-rose-700"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                          <div className="max-h-64 overflow-y-auto">
                            {COMPANY_SIZES.map(s => (
                              <button
                                key={s}
                                onClick={() => toggleSize(s)}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center justify-between ${
                                  selectedSizes.includes(s) ? 'text-emerald-700 font-bold bg-emerald-50/50' : 'text-slate-600'
                                }`}
                              >
                                {s}
                                {selectedSizes.includes(s) && <Check className="w-4 h-4" />}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {(searchQuery || selectedProvince !== 'All' || selectedTypes.length > 0 || selectedIndustries.length > 0 || selectedSizes.length > 0) && (
                  <button 
                    onClick={resetFilters}
                    className="p-2.5 text-slate-400 hover:text-rose-600 transition-colors"
                    title="Reset all filters"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-8">
          {/* Banner Section */}
          <AnimatePresence>
            {bannerUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200"
              >
                <img 
                  src={bannerUrl} 
                  alt="MapleStack Banner" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center px-8 sm:px-12">
                  <div className="max-w-lg">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                      Discover Canada's Most Innovative Software
                    </h2>
                    <p className="text-slate-200 text-lg sm:text-xl font-medium">
                      The definitive directory for Canadian-built technology solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-800">
                {filteredVendors.length} Vendors Found
                {(selectedProvince !== 'All' || selectedTypes.length > 0 || selectedIndustries.length > 0 || selectedSizes.length > 0) && (
                  <span className="ml-2 text-sm font-normal text-slate-500">
                    {selectedProvince !== 'All' ? `in ${selectedProvince}` : ''} 
                    {selectedProvince !== 'All' && (selectedTypes.length > 0 || selectedIndustries.length > 0 || selectedSizes.length > 0) ? ' • ' : ''}
                    {[...selectedTypes, ...selectedIndustries, ...selectedSizes].join(', ')}
                  </span>
                )}
              </h2>

              <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
                <button
                  onClick={() => setView('list')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    view === 'list' 
                      ? 'bg-emerald-600 text-white shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  List
                </button>
                <button
                  onClick={() => setView('map')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    view === 'map' 
                      ? 'bg-emerald-600 text-white shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <MapIcon className="w-4 h-4" />
                  Map
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {view === 'list' ? (
                <motion.div
                  key="list"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {filteredVendors.map((vendor) => (
                    <motion.div
                      layout
                      key={vendor.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onClick={() => setSelectedVendor(vendor)}
                      className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-emerald-100 transition-colors" />
                      
                      <div className="relative">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold text-xl group-hover:scale-110 transition-transform">
                            {vendor.name[0]}
                          </div>
                          <div className="flex gap-1">
                            {vendor.softwareTypes.slice(0, 2).map(type => (
                              <span key={type} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">{vendor.name}</h3>
                        <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                          <MapPin className="w-3 h-3" />
                          {vendor.headquarters.city}, {vendor.headquarters.province}
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {vendor.industries?.slice(0, 2).map(industry => (
                            <span key={industry} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-wider rounded">
                              {industry}
                            </span>
                          ))}
                          {vendor.companySize?.slice(0, 1).map(size => (
                            <span key={size} className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[9px] font-bold uppercase tracking-wider rounded">
                              {size}
                            </span>
                          ))}
                        </div>

                        <p className="text-sm text-slate-600 line-clamp-2 mb-4 h-10">
                          {vendor.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {vendor.solutions.slice(0, 2).map(solution => (
                            <span key={solution} className="text-xs text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">
                              {solution}
                            </span>
                          ))}
                          {vendor.solutions.length > 2 && (
                            <span className="text-xs text-slate-400 px-2 py-1">+{vendor.solutions.length - 2} more</span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-1">
                              {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white" />
                              ))}
                            </div>
                            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tighter">More info</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="map"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <MapView 
                    vendors={filteredVendors} 
                    onSelectVendor={(vendor) => setSelectedVendor(vendor)} 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Vendor Detail Modal */}
      <AnimatePresence>
        {selectedVendor && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVendor(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between bg-slate-50">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-emerald-600 text-3xl font-bold">
                    {selectedVendor.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-3xl font-bold text-slate-900">{selectedVendor.name}</h2>
                      <div className="flex flex-wrap gap-2">
                        {selectedVendor.softwareTypes.map(type => (
                          <span key={type} className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded-md">
                            {type}
                          </span>
                        ))}
                        {selectedVendor.industries?.map(industry => (
                          <span key={industry} className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-md">
                            {industry}
                          </span>
                        ))}
                        {selectedVendor.companySize?.map(size => (
                          <span key={size} className="px-2 py-1 bg-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-wider rounded-md">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4" />
                      {selectedVendor.headquarters.city}, {selectedVendor.headquarters.province}
                    </div>
                    {selectedVendor.website && (
                      <a href={selectedVendor.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-emerald-600 hover:underline">
                        <Globe className="w-4 h-4" />
                        Website
                      </a>
                    )}
                    {selectedVendor.linkedin && (
                      <a href={selectedVendor.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVendor(null)}
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10">
                {/* Description */}
                <section>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">About</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {selectedVendor.description}
                  </p>
                </section>

                {/* Solutions & Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <section>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Building2 className="w-4 h-4" /> Solutions
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedVendor.solutions.map(solution => (
                        <div key={solution} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 group hover:border-emerald-200 transition-colors">
                          <span className="font-medium text-slate-700">{solution}</span>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
                    <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" /> Data Residency & Infrastructure
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-bold text-emerald-600 uppercase mb-1">Storage Location</div>
                        <div className="text-slate-700 font-medium flex items-center gap-2">
                          <MapPin className="w-3 h-3" /> {selectedVendor.dataStorage.location}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-emerald-600 uppercase mb-1">Infrastructure Partners</div>
                        <div className="flex flex-wrap gap-2">
                          {selectedVendor.dataStorage.providers.map(provider => (
                            <span key={provider} className="px-2 py-1 bg-white border border-emerald-200 rounded-md text-xs font-semibold text-emerald-700">
                              {provider}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 italic leading-snug">
                        "{selectedVendor.dataStorage.details}"
                      </p>
                    </div>
                  </section>
                </div>

                {/* Pricing Section */}
                {selectedVendor.pricing && (
                  <section>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <CreditCard className="w-4 h-4" /> Pricing & Plans
                      </h3>
                      {selectedVendor.pricing.url && (
                        <a 
                          href={selectedVendor.pricing.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                        >
                          View Full Pricing <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {selectedVendor.pricing.plans.map((plan, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col hover:border-emerald-200 transition-colors">
                          <div className="flex items-center gap-2 mb-2">
                            <Tag className="w-3 h-3 text-emerald-500" />
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{plan.name}</span>
                          </div>
                          <div className="text-2xl font-bold text-slate-900 mb-4">{plan.price}</div>
                          <ul className="space-y-2 mt-auto">
                            {plan.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-tight">
                                <Check className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    {selectedVendor.pricing.details && (
                      <p className="mt-4 text-sm text-slate-500 italic">
                        * {selectedVendor.pricing.details}
                      </p>
                    )}
                  </section>
                )}

                {/* Reviews & Pros/Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <section>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Star className="w-4 h-4" /> Market Reviews
                    </h3>
                    <div className="space-y-4">
                      {selectedVendor.reviews.map(review => (
                        <a
                          key={review.platform}
                          href={review.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-all group"
                        >
                          <div>
                            <div className="font-bold text-slate-900">{review.platform}</div>
                            <div className="text-xs text-slate-500">{review.count.toLocaleString()} reviews</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-50 text-yellow-700 rounded-lg font-bold">
                              <Star className="w-3 h-3 fill-current" />
                              {review.rating}
                            </div>
                            <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-emerald-500" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Pros
                      </h3>
                      <ul className="space-y-2">
                        {selectedVendor.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-rose-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <X className="w-4 h-4" /> Cons
                      </h3>
                      <ul className="space-y-2">
                        {selectedVendor.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedVendor(null)}
                  className="px-6 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Close Directory
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
